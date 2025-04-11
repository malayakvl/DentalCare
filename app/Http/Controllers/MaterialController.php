<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProducerUpdateRequest;
use App\Models\Clinic;
use App\Models\ClinicFilial;
use App\Models\Material;
use App\Models\Filial;
use App\Models\MaterialCategories;
use App\Models\Producer;
use App\Models\Store;
use App\Models\Unit;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
        $listData = DB::table('materials')
            ->select('materials.*', 'material_categories.name AS categoryName', 'producers.name AS producerName',
            'material_categories.percent', 'sizes.name AS sizeName', 'units.name AS unitName')
            ->leftJoin('material_categories', 'material_categories.id', '=', 'materials.category_id')
            ->leftJoin('producers', 'producers.id', '=', 'materials.producer_id')
            ->leftJoin('units', 'units.id', '=', 'materials.unit_id')
            ->leftJoin('sizes', 'sizes.id', '=', 'materials.size_id')
            ->where('materials.clinic_id', $clinic->id)
            ->orderBy('name')->get();

        return Inertia::render('Material/List', [
            'clinicData' => $clinic,
            'listData' => $listData
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response {
        if ($request->user()->can('store-create')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $categories = MaterialCategories::where('parent_id', null)
                ->where('clinic_id', $clinicData->id)
                ->orWhere('special', true)
                ->get();
            $unitsData = Unit::where('clinic_id', '=', $clinicData->id)->get();
            $arrCat = array();
            $tree = $this->generateCategories($categories, $arrCat, 0);
            $formData = new MaterialCategories();
            return Inertia::render('Material/Create', [
                'clinicData' => $clinicData,
                'categoryData' => $tree,
                'unitsData' => $unitsData,
                'formData' => $formData,
            ]);
        } else {
            return Inertia::render('Layouts/NoPermission', [
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id) {
        if ($request->user()->can('store-edit')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $categories = MaterialCategories::where('parent_id', null)
                ->where('clinic_id', $clinicData->id)
                ->orWhere('special', true)
                ->get();
            $arrCat = array();
            $tree = $this->generateCategories($categories, $arrCat, 0);
            $formData = Material::find($id);
            $producer = Producer::where('id', '=', $formData->producer_id)->get();
            $unitsData = Unit::where('clinic_id', '=', $clinicData->id)->get();
            if (count($producer)) {
                $formData->producer = $producer[0]->name;
            }
            $unit = Unit::where('id', '=', $formData->unit_id)->get();
            if (count($unit)) {
                $formData->unit = $unit[0]->name;
            }
            $size = Size::where('id', '=', $formData->size_id)->get();
            if (count($size)) {
                $formData->size = $size[0]->name;
            }
            $category = MaterialCategories::where('id', '=', $formData->category_id)->get();
            if (count($category)) {
                $formData->percent = $category[0]->percent;
            }
            return Inertia::render('Material/Edit', [
                'clinicData' => $clinicData,
                'categoryData' => $tree,
                'formData' => $formData,
                'percent' => $formData->percent,
                'unitsData' => $unitsData
            ]);

        } else {
            return Inertia::render('Layouts/NoPermission', [
            ]);
        }
    }

    public function storeReport(Request $request) {
        if ($request->user()->can('store-edit')) {
            if ($request->user()->roles[0]->name != 'Admin') {
                // get store filial
                $filialId = $request->session()->get('filial_id');
                $filialdData = ClinicFilial::where('id', '=', $filialId)->first();
                $storeId = $filialdData->store_id;
                $stores = Store::where('id', '=', $filialdData->store_id)->get();
            } else {
                $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
                $stores = Store::where('clinic_id', '=', $clinicData->id)->get();
            }
            return Inertia::render('Material/Report', [
                'storesData' => $stores,
            ]);
        }
    }

    public function generateStoreReportData(Request $request) {
        if ($request->user()->can('store-edit')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $storeId = $request->get('storeId');
            $results = DB::select('
                        SELECT store_materials.*, materials.name,
                               producers.name AS producerName,
                               uw.name AS unitSizeName, um.name AS unitName
                        FROM store_materials
                        LEFT JOIN materials ON materials.id = store_materials.material_id
                        LEFT JOIN producers ON producers.id = store_materials.producer_id
                        LEFT JOIN units um ON um.id = materials.unit_id
                        LEFT JOIN units uw ON uw.id = materials.weightunit_id
                        WHERE store_materials.store_id = ' .$storeId. ' ORDER BY materials.name');
            return response()->json([
                'results' => $results,
                'clinicData' => $clinicData
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProducerUpdateRequest $request) {
        if ($request->user()->can('store-edit')) {
            if ($request->id)
                $material = Material::find($request->id);
            else {
                $material = new Material();
            }
            // find producer
            $producer = Producer::whereRaw('LOWER(name) LIKE ?', '%' .mb_strtolower($request->producer). '%')->get();
            if (count($producer) > 0) {
                $producerId = $producer[0]->id;
            } else {
                $producerNew = new Producer();
                $producerNew->name = $request->producer;
                $producerNew->save();
                $producerId = $producerNew->id;
            }
            // find unit
//            $unit = Unit::whereRaw('LOWER(name) LIKE ?', '%' .mb_strtolower($request->unit). '%')->get();

            $unit = Unit::where('id', '=', $request->unit_id)->first();
            $unitWeight = '';
            if ($request->weightunit_id) {
                $unitWeight = Unit::where('id', '=', $request->weightunit_id)->first();
            }

//            if (count($unit) > 0) {
//                $unitId = $unit[0]->id;
//            } else {
//                $unitNew = new Unit();
//                $unitNew->name = $request->unit	;
//                $unitNew->save();
//                $unitId = $unitNew->id;
//            }
            // find size
            $size = Size::whereRaw('LOWER(name) LIKE ?', '%' .mb_strtolower($request->size). '%')->get();
            if (count($size) > 0) {
                $sizeId = $size[0]->id;
            } else {
                $sizeNew = new Size();
                $sizeNew->name = $request->size;
                $sizeNew->save();
                $sizeId = $sizeNew->id;
            }
            $material->name = $request->name;
            $material->price = (float)$request->price;
            $material->retail_price = (float)$request->retail_price;
            $material->category_id = $request->category_id;
            $material->clinic_id = $request->clinic_id;
            $material->producer_id = $producerId;
            $material->unit_id = $unit->id;
            $material->size_id = $sizeId;
            $material->weight = $request->weight;
            $material->weightunit_id = $unitWeight ? $unitWeight->id : null;
            $material->price_per_unit = $request->price_per_unit | null;
            $material->save();

            return Redirect::route('material.index');
        }
    }

    public function generateCategories($categories, &$arrCat, $level) {
        foreach ($categories as $category) {
            $category->level = $level;
            $category->producerName = $category->producer();
            $arrCat[] = $category;
            if (count($category->children) > 0) {
                $this->generateCategories($category->children, $arrCat, ($level+1));
            }
        }

        return $arrCat;
    }

    public function findStoreMaterial(Request $request) {
        $name = $request->searchName;
        $storeId = $request->storeId;

        $resData = DB::table('materials')
            ->select('materials.name', 'producers.name AS producerName', 'materials.price',
                'store_materials.quantity', 'units.name AS unitName', 'materials.id', 'materials.producer_id')
            ->leftJoin('store_materials', 'store_materials.material_id', '=', 'materials.id')
            ->leftJoin('producers', 'producers.id', '=', 'store_materials.producer_id')
            ->leftJoin('units', 'units.id', '=', 'materials.unit_id')
            ->whereRaw('LOWER(materials.name) LIKE ?', '%' .mb_strtolower($name). '%')
            ->where('store_id', $storeId)
            ->get();
        return response()->json([
            'items' => $resData
        ]);
    }

    public function findMaterial(Request $request) {
        $name = $request->searchName;
        $resData = DB::table('materials')->select('*')
            ->whereRaw('LOWER(name) LIKE ?', '%' .mb_strtolower($name). '%')
            ->get();
        return response()->json([
            'items' => $resData
        ]);
    }


    public function findUnit(Request $request) {
        $name = $request->searchName;
        $producerData = DB::table('units')->select('name', 'id')
            ->where('name', 'like', $name.'%')
            ->get();
        return response()->json([
            'items' => $producerData
        ]);
    }

    public function findSize(Request $request) {
        $name = $request->searchName;
        $producerData = DB::table('sizes')->select('name', 'id')
            ->where('name', 'like', $name.'%')
            ->get();
        return response()->json([
            'items' => $producerData
        ]);
    }

    public function findPercent(Request $request) {
        $catData = DB::table('material_categories')->select('percent', 'id')
            ->where('id', '=', $request->searchId)
            ->get();
        return response()->json([
            'percent' => $catData[0]->percent
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producer $producer) {
        //
    }
}
