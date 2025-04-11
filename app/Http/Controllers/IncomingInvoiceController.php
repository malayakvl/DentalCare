<?php

namespace App\Http\Controllers;

use App\Http\Requests\InvoiceUpdateRequest;
use App\Models\Clinic;
use App\Models\ClinicFilial;
use App\Models\Currency;
use App\Models\Filial;
use App\Models\DocumentOperations;
use App\Models\InvoiceItems;
use App\Models\InvoiceStatus;
use App\Models\InvoiceType;
use App\Models\Material;
use App\Models\Producer;
use App\Models\Store;
use App\Models\Invoice;
use App\Models\StoreMaterials;
use App\Models\Tax;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class IncomingInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filialId = '';
        if ($request->user()->roles[0]->name != 'Admin') {
            // get store filial
            $filialId = $request->session()->get('filial_id');
            $filialdData = ClinicFilial::where('id', '=', $filialId)->first();
            $storeId = $filialdData->store_id;
        }
        $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
        if ($request->user()->roles[0]->name == 'Admin') {
            $invoiceData = DB::table('invoices')
                ->select('invoices.*',
                    'stores.name AS storeName',
                    'invoice_statuses.name as statusName',
                    'invoice_types.name as typeName',
                    'users.name AS customerName',
                    'producers.name AS producerName'
                )
                ->leftJoin('stores', 'stores.id', '=', 'invoices.store_id')
                ->leftJoin('invoice_statuses', 'invoice_statuses.id', '=', 'invoices.status_id')
                ->leftJoin('invoice_types', 'invoice_types.id', '=', 'invoices.type_id')
                ->leftJoin('producers', 'producers.id', '=', 'invoices.producer_id')
                ->leftJoin('users', 'users.id', '=', 'invoices.customer_id')
                ->where('invoices.clinic_id', $clinic->id)
                ->where('invoices.type_id', 1)
                ->orderBy('invoice_number', 'DESC')->get();
        } else {
            $invoiceData = DB::table('invoices')
                ->select('invoices.*',
                    'stores.name AS storeName',
                    'invoice_statuses.name as statusName',
                    'invoice_types.name as typeName',
                    'users.name AS customerName',
                    'producers.name AS producerName'
                )
                ->leftJoin('stores', 'stores.id', '=', 'invoices.store_id')
                ->leftJoin('invoice_statuses', 'invoice_statuses.id', '=', 'invoices.status_id')
                ->leftJoin('invoice_types', 'invoice_types.id', '=', 'invoices.type_id')
                ->leftJoin('producers', 'producers.id', '=', 'invoices.producer_id')
                ->leftJoin('users', 'users.id', '=', 'invoices.customer_id')
                ->where('invoices.store_id', $storeId)
                ->where('invoices.type_id', 1)
                ->orderBy('invoice_number', 'DESC')->get();
        }
        return Inertia::render('InvoiceIncoming/List', [
            'clinicData' => $clinic,
            'listData' => $invoiceData
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response {
        if ($request->user()->can('invoice-incoming-create')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $storeData = Store::where('clinic_id', $clinicData->id)->get();
            $statusData = InvoiceStatus::all();
            $currencyData = Currency::where('clinic_id', $clinicData->id)->get();
            $taxData = Tax::where('clinic_id', $clinicData->id)->get();
            $typeData = InvoiceType::all();
            $formData = new Invoice();
            $lastInvoiceNum = DB::table('invoices')
                ->where('clinic_id', $clinicData->id)
                ->max('invoice_number');
            if (!$lastInvoiceNum) {
                $num = 1;
            } else {
                $maxNum = (explode('-', $lastInvoiceNum));
                if (intval($maxNum[1])) {
                    $num = intval($maxNum[1]);
                }
                ++$num;
            }
            $formData->invoice_number = date("dmy").'-'.$paddedNumber = str_pad($num, 7, '0', STR_PAD_LEFT);;
            $producerData = Producer::all();
            $customerData = DB::table('users')
                ->select('users.*')
                ->leftJoin('clinic_user', 'users.id', '=', 'clinic_user.user_id')
                ->where('clinic_id', $clinicData->id)
                ->orderBy('name')->get();
            return Inertia::render('InvoiceIncoming/Create', [
                'clinicData' => $clinicData,
                'filialData' => $storeData,
                'formData' => $formData,
                'storeData' => $storeData,
                'customerData' => $customerData,
                'producerData' => $producerData,
                'statusData' => $statusData,
                'typeData' => $typeData,
                'currencyData' => $currencyData,
                'taxData' => $taxData
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id) {
        if ($request->user()->can('invoice-incoming-edit')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $storeData = Store::where('clinic_id', $clinicData->id)->get();
            $statusData = InvoiceStatus::all();
            $typeData = InvoiceType::all();
            $formData = Invoice::find($id);
            $currencyData = Currency::where('clinic_id', $clinicData->id)->get();
            $taxData = Tax::where('clinic_id', $clinicData->id)->get();
            $rowData = InvoiceItems::select('invoice_items.*', 'materials.name as product')
                ->leftJoin('materials', 'materials.id', '=', 'invoice_items.product_id')
                ->where('invoice_id', $id)->get();
            $producerData = Producer::all();
            $customerData = DB::table('users')
                ->select('users.*')
                ->leftJoin('clinic_user', 'users.id', '=', 'clinic_user.user_id')
                ->where('clinic_id', $clinicData->id)->orderBy('name')->get();
            return Inertia::render('InvoiceIncoming/Edit', [
                'clinicData' => $clinicData,
                'filialData' => $storeData,
                'formData' => $formData,
                'formRowData' => $rowData,
                'storeData' => $storeData,
                'customerData' => $customerData,
                'producerData' => $producerData,
                'statusData' => $statusData,
                'typeData' => $typeData,
                'currencyData' => $currencyData,
                'taxData' => $taxData
            ]);

        } else {

        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id) {
        //
        if ($request->user()->can('invoice-incoming-view')) {
            $filial = ClinicFilial::find($id);
            return Inertia::render('Store/FilialView', [
                'filialData' => $filial,
            ]);
        } else {

        }
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(InvoiceUpdateRequest $request) {
        if ($request->id) {
            $data = $request;
        } else {
            $data = $request->values;
        }

        if ($request->user()->can('invoice-incoming-edit')) {
            if ($request->id) {
                $invoice = Invoice::find($data->id);
                // invoice was issued and we need to remove materials from store and remove operation
            }
            else {
                $invoice = new Invoice();
            }

            $invoice->fill($request->validated());
            $invoice->invoice_number = $request->invoice_number;
            $invoice->invoice_date = $request->invoice_date;
            $invoice->status_id = $request->status_id;
            $invoice->type_id = 1;
            $invoice->tax_id = $request->tax_id;
            $invoice->currency_id = $request->currency_id;
            $invoice->save();
            if (!$request->id) {
                $invoiceId = $invoice->id;
            } else {
                $invoiceId = $request->id;
                DB::table('invoice_items')->where('invoice_id', $invoiceId)->delete();
            }
            $producer = Producer::find($request->producer_id);
            $store = Store::find($request->store_id);
            if ($request->status_id === 2) {
                DB::table('document_operations')
                    ->where('document_id', $invoiceId)
                    ->where('document_type', 'invoice')
                    ->delete();
            }
            $total = 0;
            foreach ($request->rows as $row) {
                $invoiceItem = new InvoiceItems();
                $invoiceItem->invoice_id = $invoiceId;
                $invoiceItem->product_id = $row["product_id"];
                $invoiceItem->quantity = $row["quantity"];
                $invoiceItem->price = $row["price"];
                $invoiceItem->total = ($row["quantity"])*floatval($row["price"]);
                $total = $total + $row["quantity"]*floatval($row["price"]);
                $invoiceItem->save();
                if (intval($request->status_id) === 2) {
                    $documentOperation  = new DocumentOperations();
                    $documentOperation->operation_date = $request->invoice_date;
                    $documentOperation->operation_number = $request->invoice_number;
                    $documentOperation->document_id = $invoiceId;
                    $documentOperation->document_type = 'invoice';
                    $documentOperation->operation_dt = '281';
                    $documentOperation->subconto_dt = json_encode(array(
                        'store_id' => $request->store_id,
                        'name' => $store->name,
                        'product_id' => $row["product_id"],
                        'product_name' => $row['product']
                    ));
                    // get weight if exist
                    $material = Material::find($row["product_id"]);
                    DB::select('
                        INSERT INTO store_materials AS sm (store_id, material_id, producer_id, quantity, weight, unit_id)
                        VALUES ('.$request->store_id.', '.$row["product_id"].', '.$material->producer_id.',
                        '.$row["quantity"].', '.($material->weight*$row["quantity"]). ', '.($material->weightunit_id ? $material->weightunit_id :$material->unit_id).')
                        ON CONFLICT ON CONSTRAINT store_materials_pkey
                        DO UPDATE SET
                        quantity = sm.quantity + ' .$row["quantity"]. ';
                    ');

                    $documentOperation->operation_kt = '631';
                    $documentOperation->subconto_kt = json_encode(array(
                        'producer_id' => $request->producer_id,
                        'name' => $producer->name
                    ));
                    $documentOperation->amount = $row["quantity"]*floatval($row["price"]);
                    $documentOperation->quantity = $row["quantity"];
                    $documentOperation->comment = 'income_products';
                    $documentOperation->save();
                }
            }
            // create operations
            if (intval($request->status_id) === 2) {
                $documentOperation  = new DocumentOperations();
                $documentOperation->operation_date = $request->invoice_date;
                $documentOperation->operation_number = $request->invoice_number;
                $documentOperation->document_id = $invoiceId;
                $documentOperation->document_type = 'invoice';
                $documentOperation->operation_dt = '6442';
                $documentOperation->subconto_dt = json_encode(array('name' => 'nds'));
                $documentOperation->operation_kt = '631';
                $documentOperation->subconto_kt = json_encode(array('producer_id' => $request->producer_id, 'name' => $producer->name));
                $documentOperation->amount = $total;
                $documentOperation->quantity = 0;
                $documentOperation->comment = 'nds';
                $documentOperation->save();
            }

            return Redirect::route('invoice.incoming.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice) {
        //
    }
}
