import ClinicForm from './form/Form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setEmptyClinicAction } from '../../redux/clinics/actions';
import { clinicItemSelector, redirectToListSelector } from '@/redux/clinics/selectors';
import { useRouter, redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'
import {redirectToListAction} from "@/redux/clinics";

interface PropsClinic {
    locale: string;
}

const Add: React.FC<PropsClinic> = ({ locale }) => {
    const dispatch = useDispatch();
    const clinicData = useSelector(clinicItemSelector);
    const router = useRouter();
    const redirectToList = useSelector(redirectToListSelector);

    useEffect(() => {
        if (redirectToList) {
            router.push("/clinics")
            dispatch(redirectToListAction(false));
        }
    }, [redirectToList]);

    return (
        <>
            <ClinicForm locale={locale} clinicData={clinicData} photos={[]} />
        </>
    );
};

export default Add;
