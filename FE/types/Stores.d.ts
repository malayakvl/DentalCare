declare namespace Stores {
    interface Root {
        clinics: Stores[];
        clinic: Store;
        loading: boolean;
        isFetched: boolean;
        redirectToList: boolean;
        uploadedFiles: File[];
        productFiles: string[];
        checkedIds: number[];
        count: number;
        items: StoreItem[];
    }

    interface Range {
        min: number;
        max: number;
    }

    interface StoreItem {
        id: number;
        name: string;
        address: string;
        photos: any;
        previewphoto: string;
        created_at: any;
        updated_at: any;
    }
}
