import React, { useEffect, useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { updateFormEventAction } from '../../redux/scheduler/actions';
import { suggestionsSelector } from '../../redux/staff/selectors';
import { findPatientAction } from '../../redux/staff';
import { InputText } from '../_form';
import { Field } from 'formik';
import { eventsDataSelector } from '../../redux/scheduler/selectors';

interface Props {
    props: any;
}

const EventPatient: React.FC<Props> = ({ props }) => {
    const t = useTranslations();
    const dispatch = useDispatch();

    const searchUserResult = useSelector(suggestionsSelector);
    const initialEvent = useSelector(eventsDataSelector);

    const [addPatient, setAddPatient] = useState(false);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [value, setValue] = useState('');

    const onChange = (event: any, data: any) => {
        setValue(data.newValue);
    };

    useEffect(() => {
        setSuggestions(searchUserResult);
    }, [searchUserResult]);

    useEffect(() => {
        if (initialEvent.id) {
            setValue(initialEvent.patientName);
        }
    }, [initialEvent.id]);

    const getSuggestionValue = (suggestion: any) => {
        // setInviteUserId(suggestion.id);
        dispatch(
            updateFormEventAction({
                type: 'patient_id',
                modifier: suggestion.id
            })
        );
        return `${suggestion.first_name} ${suggestion.last_name} [${suggestion.phone}]`;
    };

    // Use your imagination to render suggestions.
    const renderSuggestion = (suggestion: any) => (
        <div>
            {suggestion.first_name} {suggestion.last_name} [{suggestion.phone}]
        </div>
    );

    const onSuggestionsFetchRequested = (data: any) => {
        dispatch(findPatientAction(data.value));
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: t('Type email or phone to find people'),
        className: 'form-control w-[330px] min-w-[330px]',
        value,
        onChange: onChange
    };

    return (
        <>
            <div className="mb-4">
                <label className="control-label">{t('Patient')}</label>
                <div className="flex">
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                    {addPatient && (
                        <MinusCircleIcon
                            onClick={() => {
                                setAddPatient(!addPatient);
                                dispatch(
                                    updateFormEventAction({
                                        type: 'newPatient',
                                        modifier: !addPatient
                                    })
                                );
                                setValue('');
                            }}
                            className="ml-2 mt-1 text-gray-500 cursor-pointer"
                            width={32}
                            height={32}
                        />
                    )}
                    {!addPatient && (
                        <PlusCircleIcon
                            onClick={() => {
                                setAddPatient(!addPatient);
                                dispatch(
                                    updateFormEventAction({
                                        type: 'newPatient',
                                        modifier: !addPatient
                                    })
                                );
                                setValue('');
                            }}
                            className="ml-2 mt-1 text-gray-500 cursor-pointer"
                            width={32}
                            height={32}
                        />
                    )}
                </div>
            </div>
            {addPatient && (
                <>
                    <InputText
                        icon={null}
                        label={'First Name'}
                        name={'first_name'}
                        placeholder={'First Name'}
                        style={null}
                        props={props}
                    />
                    <InputText
                        icon={null}
                        label={'Last Name'}
                        name={'last_name'}
                        placeholder={'Last Name'}
                        style={null}
                        props={props}
                    />
                    <InputText
                        icon={null}
                        label={'Phone'}
                        name={'phone'}
                        placeholder={'Phone'}
                        style={null}
                        props={props}
                    />
                    <div className="mb-4 text-xs">
                        <div role="group" aria-labelledby="my-radio-group">
                            <label className="control-label">
                                <Field type="radio" name="gender" value="male" />
                                {t('Male')}
                            </label>
                            <label className="control-label ml-3">
                                <Field type="radio" name="gender" value="female" />
                                {t('Female')}
                            </label>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default EventPatient;
