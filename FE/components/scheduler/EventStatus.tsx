import React, { useState } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { updateFormEventAction } from '../../redux/scheduler/actions';

export default function EventStatus() {
    const t = useTranslations();
    const dispatch = useDispatch();
    const statuses = [
        { name: 'planned', color: '#4c95f5' },
        { name: 'confirm', color: '#eb9d17' },
        { name: 'done', color: '#7d17eb' },
        { name: 'missed', color: '#fae73c' },
        { name: 'postponed', color: '#3cfafa' },
        { name: 'noanswer', color: '#ff5722' },
        { name: 'late', color: '#ff21ed' },
        { name: 'inclicnic', color: '#2971ba' },
        { name: 'incabinet', color: '#37ff21' },
        { name: 'decline', color: '#222223' }
    ];
    const [eventStatus, setEventStatus] = useState({ name: 'planned', color: '#4c95f5' });
    const [showStatus, setShowStatus] = useState(false);

    return (
        <div className="mb-4 relative grid justify-items-end">
            <button
                className="text-center inline-flex text-xs font-bold"
                style={{ color: eventStatus.color }}
                onClick={() => setShowStatus(!showStatus)}
                type="button">
                <DotsVerticalIcon width={16} height={16} style={{ color: eventStatus.color }} />
                {t(`statuses.${eventStatus.name}`)}
            </button>

            {showStatus && (
                <div className=" top-3 text-xs z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow absolute">
                    <ul className="py-1 text-xs" aria-labelledby="dropdownLeftButton">
                        {statuses.map((status: any) => (
                            <li
                                key={status.name}
                                role="presentation"
                                onClick={() => {
                                    setShowStatus(false);
                                    setEventStatus(status);
                                    dispatch(
                                        updateFormEventAction({
                                            type: 'status',
                                            modifier: status
                                        })
                                    );
                                }}>
                                <span
                                    style={{ color: status.color }}
                                    className="block py-2 px-4 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    {t(`statuses.${status.name}`)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
