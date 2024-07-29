declare namespace Scheduler {
    interface Root {
        showModalscheduler: boolean;
        loading: boolean;
        isFetched: boolean;
        items: any;
        interval: any;
        event: Event;
    }

    interface Event {
        id: number | null;
        doctor_id: number | null;
        cabinet_id: number | null;
        event_date: any;
        patient_id: number | null;
        patient: any;
        comment: string | null;
        status: any;
        newPatient: boolean;
        date_event: any;
        time_event_from: any;
        time_event_to: any;
    }
}
