declare namespace Clinics {
    interface Root {
        clinics: Clinic[];
        clinic: Clinic;
        loading: boolean;
        isFetched: boolean;
        redirectToList: boolean;
        uploadedFiles: File[];
        productFiles: string[];
        checkedIds: number[];
        count: number;
        items: ClinicItem[];
    }

    interface Range {
        min: number;
        max: number;
    }

    interface ClinicItem {
        id: number;
        name: string;
        address: string;
        photos: any;
        previewphoto: string;
        created_at: any;
        updated_at: any;
    }
}
