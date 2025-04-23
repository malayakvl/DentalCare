<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientUpdateRequest;
use App\Models\Clinic;
use App\Models\ClinicFilial;
use App\Models\Patient;
use App\Models\Cabinet;
use App\Models\Size;
use App\Models\Store;
use App\Models\PatientTreatment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
        if ($request->session()->get('filial_id')) {
            $listData = DB::table('patients')
                ->select('patients.*')
                ->leftJoin('clinic_patient', 'clinic_patient.patient_id', '=', 'patients.id')
                ->where('clinic_patient.clinic_id', $clinic->id)
                ->where('clinic_patient.filial_id', $request->session()->get('filial_id'))
                ->orderBy('first_name')->get();
        } else {
            $listData = DB::table('patients')
                ->select('patients.*')
                ->leftJoin('clinic_patient', 'clinic_patient.patient_id', '=', 'patients.id')
                ->where('clinic_patient.clinic_id', $clinic->id)
                ->orderBy('first_name')->get();
        }
        return Inertia::render('Patient/List', [
            'clinicData' => $clinic,
            'listData' => $listData,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response {
        if ($request->user()->can('store-create')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $customerData = DB::table('users')
                ->select('users.*')
                ->leftJoin('clinic_user', 'users.id', '=', 'clinic_user.user_id')
                ->where('clinic_id', $clinicData->id)->orderBy('name')->get();
            $contactData = DB::table('patients_contact')->get();
            $formData = new Patient();

            return Inertia::render('Patient/Create', [
                'clinicData' => $clinicData,
                'contactData' => $contactData,
                'customerData' => $customerData,
                'formData' => $formData,
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id) {
        if ($request->user()->can('patient-edit')) {
            $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            $customerData = DB::table('users')
                ->select('users.*')
                ->leftJoin('clinic_user', 'users.id', '=', 'clinic_user.user_id')
                ->where('clinic_id', $clinicData->id)->orderBy('name')->get();
            $contactData = DB::table('patients_contact')->get();
            $formData = Patient::where('id', '=', $id)->first();

            return Inertia::render('Patient/Edit', [
                'formData' => $formData,
                'customerData' => $customerData,
                'contactData' => $contactData
            ]);

        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PatientUpdateRequest $request) {
        if ($request->user()->can('patient-edit')) {
            $isNew = false;
            if ($request->id)
                $patient = Patient::find($request->id);
            else {
                $patient = new Patient();
                $isNew = true;
            }
            $patient->fill($request->validated());
            $patient->save();

            if ($request->file) {
                $fileName = 'Patient'.$patient->id.'.'.$request->file->extension();  
                $patient->avatar = $fileName;
                $patient->save();
                $request->file->move(public_path('uploads/patients'), $fileName);
            }
            if ($isNew) {
                return Redirect::route('patient.cliniccard', ['id' => $patient->id]);
                // return redirect()->route('patient.cliniccard', ['id' => $patient->id]);
            } else {
                return redirect()->route('patient.index');
            }
            // return Redirect::route('patient.index');
        }
    }

    public function createTreatment(Request $request) {
        if ($request->user()->can('patient-edit')) {
            $patientTreatment = new PatientTreatment();
            $patientTreatment->fill($request->all());
            $patientTreatment->save();

            if ($request->type === 'formula') {
                $patientData = Patient::where('id', '=', $request->user_id)->first();

                // return Inertia::render('Patient/EditFormula', [
                //     'patientData' => $patientData
                // ]);
                return Redirect::route('patient.formula.edit', ['id' => $request->user_id]);
                // return Inertia::render('Patient/EditFormula', [
                //     'clinicData' => $clinicData,
                //     'formData' => $formData,
                //     'user_id' => $request->params['user_id']
                // ]);
            } else if ($request->type === 'treatment') {
                $patientTreatment->type = 'treatment';
            } else if ($request->type === 'stage') {
                $patientTreatment->type = 'stage';
            }
            // $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
            // $formData = new Patient();

            // return Inertia::render('Patient/CreateTreatment', [
            //     'clinicData' => $clinicData,
            //     'formData' => $formData,
            // ]);
        }
    }

    /**
     * view patient clinic card
     */
    public function view(Request $request, $id) {
        $patientData = Patient::where('id', '=', $id)->first();

        return Inertia::render('Patient/View', [
            'patientData' => $patientData
        ]);
    }

    /**
     * view patient clinic card
     */
    public function cliniccard(Request $request, $id) {
        $patientData = Patient::where('id', '=', $id)->first();

        return Inertia::render('Patient/Cliniccard', [
            'patientData' => $patientData
        ]);
    }


    public function formulaEdit(Request $request, $id) {
        $patientData = Patient::where('id', '=', $id)->first();

        return Inertia::render('Patient/EditFormula', [
            'patientData' => $patientData
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producer $producer) {
        //
    }
}
