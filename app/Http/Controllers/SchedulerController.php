<?php

namespace App\Http\Controllers;

use App\Http\Requests\SchedulerUpdateRequest;
use App\Models\Clinic;
use App\Models\ClinicFilial;
use App\Models\Customer;
use App\Models\Filial;
use App\Models\Patient;
use App\Models\Scheduler;
use App\Models\User;
use App\Models\ClinicUser;
use App\Notifications\CustomerInviteNotification;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;

class SchedulerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $clinicData = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
        $customerData = DB::table('users')
            ->select('users.*')
            ->leftJoin('clinic_user', 'users.id', '=', 'clinic_user.user_id')
            ->where('clinic_id', $clinicData->id)->orderBy('name')->get();
        foreach ($customerData as $customer) {
            if ($customer->photo) {
                $customer->avatar = 'http://localhost:8000/storage/clinic/users/'.$customer->photo;
            }
        }
        if ($request->session()->get('filial_id')) {
            $listCabinets = DB::table('cabinets')
                ->select('cabinets.*', "clinic_filials.name AS filial_name")
                ->leftJoin('clinic_filials', 'clinic_filials.id', '=', 'cabinets.filial_id')
                ->where('cabinets.clinic_id', $clinicData->id)
                ->where('cabinets.filial_id', $request->session()->get('filial_id'))
                ->orderBy('name')->get();
        } else {
            $listCabinets = DB::table('cabinets')
                ->select('cabinets.*', "clinic_filials.name AS filial_name")
                ->leftJoin('clinic_filials', 'clinic_filials.id', '=', 'cabinets.filial_id')
                ->where('cabinets.clinic_id', $clinicData->id)
                ->orderBy('name')->get();
        }
        $weekStart = date("Y-m-d", strtotime('monday this week'));
        $weekEnd = date("Y-m-d", strtotime('sunday this week'));
        $eventsData = DB::table('schedulers')
            ->select('schedulers.title', 'schedulers.event_date', 'schedulers.event_time_from',
                'schedulers.event_time_to', 'users.color', 'schedulers.status_color', 'schedulers.status_name',
                'schedulers.cabinet_id', 'schedulers.cabinet_id',
                'schedulers.doctor_id AS id', 'cabinets.name AS cabinet_name'
            )
            ->leftJoin('users', 'users.id', '=', 'schedulers.doctor_id')
            ->leftJoin('cabinets', 'cabinets.id', '=', 'schedulers.cabinet_id')
            ->where('schedulers.clinic_id', $clinicData->id)
            ->whereBetween('event_date', [$weekStart, $weekEnd])
            ->get();
        $events = array();
        foreach ($eventsData as $event) {
//            $event->title = $event->title;
            $event->startDate = date($event->event_date.' '.$event->event_time_from);
            $event->endDate = date($event->event_date.' '.$event->event_time_to);
            $event->cabinet = $event->cabinet_name;
            $events[] = (object) $event;
        }
//        dd($events);
//        exit;
        $formData = new Scheduler();
        return Inertia::render('Scheduler/Index', [
            'clinicData' => $clinicData,
            'customerData' => $customerData,
            'cabinetData' => $listCabinets,
            'formData' => $formData,
            'eventsData' => $events
        ]);
    }

    public function fetchEvents(Request $request) {
        $qData = $request->all();
        $clinicData = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
        $eventsData = Scheduler::where('clinic_id', '=', $clinicData->id)->get();
//        $eventsData = DB::table('schedulers')
//            ->select('schedulers.title', 'schedulers.event_date', 'schedulers.event_time_from',
//                'schedulers.event_time_to',
//                'schedulers.cabinet_id', 'schedulers.cabinet_id',
//                'schedulers.doctor_id AS id'
//            )
//            ->leftJoin('users', 'users.id', '=', 'schedulers.doctor_id')
//            ->whereBetween('event_date', [$qData['start'], $qData['end']])
//            ->get();
        $eventsData = DB::table('schedulers')
            ->select('schedulers.title', 'schedulers.event_date', 'schedulers.event_time_from',
                'schedulers.event_time_to', 'users.color', 'schedulers.status_color', 'schedulers.status_name',
                'schedulers.cabinet_id', 'schedulers.cabinet_id',
                'schedulers.doctor_id AS id', 'cabinets.name AS cabinet_name',
                'patients.first_name', 'patients.last_name'
            )
            ->leftJoin('users', 'users.id', '=', 'schedulers.doctor_id')
            ->leftJoin('cabinets', 'cabinets.id', '=', 'schedulers.cabinet_id')
            ->leftJoin('patients', 'patients.id', '=', 'schedulers.patient_id')
            ->where('schedulers.clinic_id', $clinicData->id)
            ->whereBetween('event_date', [$qData['start'], $qData['end']])
            ->get();

        $events = array();
        foreach ($eventsData as $event) {
            $event->startDate = date($event->event_date.' '.$event->event_time_from);
            $event->endDate = date($event->event_date.' '.$event->event_time_to);
            $events[] = (object) $event;
        }
        return response()->json([
            'items' => $events
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response {
        $clinicData = Clinic::where('user_id', '=', $request->user()->id)->first();
        $formData = new User();
        $rolesData = Role::all();
        return Inertia::render('Customer/CustomerCreate', [
            'clinicData' => $clinicData,
            'formData' => $formData,
            'roleData' => $rolesData
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id) {
        if ($request->user()->can('customer-view')) {
            $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));

            $serverFilePath = public_path('storage/clinic/users/customer-' .$id. '.png');
            $imagePath = '';
            if (file_exists($serverFilePath)) {
                $imagePath = asset('storage/clinic/users/customer-' .$id. '.png');
            }
            $formData = User::where('id', $id)->get();
            $assignedData = DB::table('clinic_filial_user')
                ->select('roles.name AS roleName', 'roles.special', 'clinic_filials.name AS filialName', 'roles.clinic_id AS clinicId')
                ->leftJoin('roles', 'roles.id', '=', 'clinic_filial_user.role_id')
                ->leftJoin('clinic_filials', 'clinic_filials.id', '=', 'clinic_filial_user.filial_id')
                ->where('clinic_filial_user.user_id', $id)
                ->where('clinic_filial_user.clinic_id', $clinic->id)
                ->get();
            return Inertia::render('Customer/CustomerShow', [
                'formData' => $formData[0],
                'rolesData' => $assignedData,
                'imagePath' => $imagePath
            ]);
        } else {
            return Inertia::render('Clinic/FilialView', [
            ]);
        }
    }

    public function findByEmail(Request $request) {
        $email = $request->searchEmail;
        $usersData = DB::table('users')->select('name', 'email', 'id')
            ->where('email', 'like', $email.'%')
            ->get();
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA',
            'items' => $usersData
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id) {
        $serverFilePath = public_path('storage/clinic/users/customer-' .$id. '.png');
        $imagePath = '';
        if (file_exists($serverFilePath)) {
            $imagePath = asset('storage/clinic/users/customer-' .$id. '.png');
        }
        if ($request->user()->can('customer-edit')) {
            $clinicData = $request->user()->clinicByFilial($request->session()->get('clinic_id'));;
            $formData = User::where('id', $id)->get();
            $rolesData = Role::all();
            return Inertia::render('Customer/CustomerEdit', [
                'clinicData' => $clinicData,
                'formData' => $formData[0],
                'roleData' => $rolesData,
                'imagePath' => $imagePath
            ]);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(SchedulerUpdateRequest $request) {
        $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));
//        dd($request->status_id["name"]);exit;
        if ($request->user()->can('schedule-create')) {
            if ($request->id) {
//                $userId = $request->id;
//                if ($request->file) {
//                    $ext = $request->file->getClientOriginalExtension();
//                    $photo = 'customer-' .$userId. '.'.$ext;
//                    Storage::disk('public')->put('clinic/users/customer-' .$userId. '.'.$ext, file_get_contents($request->file));
//                }
//
//                $user = User::find($request->id);
//                $user->email = $request->email;
//                $user->name = $request->name;
//                $user->phone = $request->phone;
//                $user->inn = $request->inn;
//                if ($photo) {
//                    $user->photo = $photo;
//                }
//                $user->save();

                return Inertia::location(route('customer.index'));
            }
            else {
                if ($request->newPatientData) {
                    // create patient
                    $patient = new Patient();
                    $patient->first_name = $request->newPatientData['firstName'];
                    $patient->last_name = $request->newPatientData['lastName'];
                    $patient->phone = $request->newPatientData['phone'];
                    $patient->email = $request->newPatientData['email'] ? $request->newPatientData['email'] : $request->newPatientData['phone'];
                    $patient->password = Hash::make($request->newPatientData['phone']);
                    $patient->save();

                    $patientId = $patient->id;
                }
                $scheduler = new Scheduler();
                $scheduler->title = $request->title;
                $scheduler->event_date = $request->event_date;
                $scheduler->event_time_from = $request->event_time_to;
                $scheduler->event_time_to = $request->event_time_to;
                $scheduler->clinic_id = $clinic->id;
                $scheduler->cabinet_id = $request->cabinet_id;
                $scheduler->doctor_id = $request->doctor_id;
                $scheduler->patient_id = $patientId;
                $scheduler->description = $request->description;
                $scheduler->status_name = $request->status_id["name"];
                $scheduler->status_color = $request->status_id["color"];
                $scheduler->save();

//                $userId = $user->id;
//                if ($request->file) {
//                    $ext = $request->file->getClientOriginalExtension();
//                    $photo = 'customer-' .$userId. '.'.$ext;
//                    $user->photo = $photo;
//                    $user->save();
//                    Storage::disk('public')->put('clinic/users/customer-' .$userId. '.'.$ext, file_get_contents($request->file));
//                }
//                $clinicUser = new ClinicUser();
//                $clinicUser->user_id = $userId;
//                $clinicUser->clinic_id = $request->clinic_id;
//                $clinicUser->clinic_token = Str::random(60);
//                $clinicUser->save();


                return Inertia::location(route('scheduler.index'));
            }
        }
    }

    public function assign(Request $request, $id) {
//        $clinic = $request->user()->clinic;
        $clinic = $request->user()->clinicByFilial($request->session()->get('clinic_id'));

        $customer = User::where('id', $id)->get();
        $rolesData = Role::where('clinic_id', null)->orWhere('clinic_id', $clinic->id)
            ->orderBy('name')->get();
        $filialData = ClinicFilial::where('clinic_id', $clinic->id)->get();
        $assignedData = DB::table('clinic_filial_user')->select()
            ->where('user_id', $id)
            ->where('clinic_id', $clinic->id)
            ->get();

        if (count($assignedData) > 0) {
            return Inertia::render('Customer/AssignFilialEdit', [
                'rolesData' => $rolesData,
                'clinicData' => $clinic,
                'filialData' => $filialData,
                'customer' => $customer[0],
                'assignedData' => $assignedData
            ]);
        } else {
            return Inertia::render('Customer/AssignFilial', [
                'rolesData' => $rolesData,
                'clinicData' => $clinic,
                'filialData' => $filialData,
                'customer' => $customer[0],
            ]);
        }
    }

    public function assignSubmit(Request $request) {
        DB::table('clinic_filial_user')
            ->where('user_id', $request->customerId)
            ->where('clinic_id', $request->clinicId)
            ->delete();

        foreach ($request->values as $values) {
            foreach ($values as $value) {
                if (intval($value['role_id']) > 0) {
                    DB::table('clinic_filial_user')->insert(
                        [
                            'user_id' => $request->customerId,
                            'filial_id' => $value['filial_id'],
                            'role_id' => $value['role_id'],
                            'clinic_id' => $request->clinicId
                        ]
                    );
                }
            }
        }

        return Inertia::location(route('customer.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Filial $filial) {
        //
    }
}
