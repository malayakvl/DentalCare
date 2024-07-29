import { getSession } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, Fragment, useRef } from 'react';
// import { fetchCabinetsAction } from '../../redux/cabinets';
// import { cabinetsSelector } from '../../redux/cabinets/selectors';
import { useTranslations } from 'next-intl';
import { Button, Typography } from "@mui/material";
// import { permissionsSelector } from '../../redux/user/selectors';
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';
import { Scheduler } from "@aldabil/react-scheduler";
import { SchedulerRef } from "@aldabil/react-scheduler/types";
import { RESOURCES, EVENTS, SERVICES } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";



// const Scheduler = dynamic(() => import('../../components/scheduler/Scheduler'), {
//     ssr: false
// });

export default function Index({ session }: { session: any }) {
    const dispatch = useDispatch();
    const t = useTranslations();
    const [mode, setMode] = useState<"default" | "tabs">("default");
    const calendarRef = useRef<SchedulerRef>(null);

    // const cabinets = useSelector(cabinetsSelector);
    // const permissions = useSelector(permissionsSelector);

    const [isLoaded, setIsLoaded] = useState(false);
    // useEffect(() => {
    //     // console.log(items);
    //     dispatch(fetchCabinetsAction());
    // }, []);

    // useEffect(() => {
    //     if (cabinets.length > 0 && typeof window != 'undefined' && permissions) {
    //         setIsLoaded(true);
    //     }
    // }, [permissions]);

    return (
        <>
            <div className="page-title">
                <h1>{t('Scheduler')}</h1>
            </div>
            <div className="block-white-4 mr-10">
                <div className="w-full overflow-scroll">
                    {/*<div className="scheduler-container relative"><Scheduler /></div>*/}
                    <Fragment>
                        <div style={{ textAlign: "left", marginBottom: '20px', display: 'block' }} className="scheduler-view">
                            <Button
                                color={mode === "default" ? "primary" : "inherit"}
                                variant={mode === "default" ? "contained" : "text"}
                                size="small"
                                onClick={() => {
                                    setMode("default");
                                    calendarRef.current?.scheduler?.handleState(
                                        "default",
                                        "resourceViewMode"
                                    );
                                }}
                            >
                                Default
                            </Button>
                            <Button
                                color={mode === "tabs" ? "primary" : "inherit"}
                                variant={mode === "tabs" ? "contained" : "text"}
                                size="small"
                                onClick={() => {
                                    setMode("tabs");
                                    calendarRef.current?.scheduler?.handleState(
                                        "tabs",
                                        "resourceViewMode"
                                    );
                                }}
                            >
                                Tabs
                            </Button>
                        </div>
                        <Scheduler
                            ref={calendarRef}
                            events={EVENTS}
                            resources={RESOURCES}
                            agenda={false}
                            disableViewNavigator={false}
                            resourceFields={{
                                idField: "admin_id",
                                textField: "title",
                                subTextField: "mobile",
                                avatarField: "title",
                            }}
                            fields={[
                                {
                                    name: "serviceId",
                                    type: "select",
                                    options: SERVICES.map((res) => {
                                        return {
                                            id: res.id,
                                            text: `${res.text}`,
                                            value: res.id //Should match "name" property
                                        };
                                    }),
                                    config: { label: "Service", required: true },
                                },
                                {
                                    name: "admin_id",
                                    type: "select",
                                    default: RESOURCES[0].admin_id,
                                    options: RESOURCES.map((res) => {
                                        return {
                                            id: res.admin_id,
                                            text: `${res.title} (${res.mobile})`,
                                            value: res.admin_id //Should match "name" property
                                        };
                                    }),
                                    config: { label: "Assignee", required: true },
                                },
                                {
                                    name: "Description",
                                    type: "input",
                                    default: "Default Value...",
                                    config: { label: "Details", multiline: true, rows: 4 }
                                },
                            ]}
                            viewerExtraComponent={(fields, event) => {
                                return (
                                    <div>
                                        {fields.map((field, i) => {
                                            if (field.name === "admin_id") {
                                                const admin = (field as any).options.find(
                                                    (fe: { id: any; }) => fe.id === event.admin_id
                                                );
                                                return (
                                                    <Typography
                                                        key={i}
                                                        style={{ display: "flex", alignItems: "center" }}
                                                        color="textSecondary"
                                                        variant="caption"
                                                        noWrap
                                                    >
                                                        <PersonRoundedIcon /> {admin.text}
                                                    </Typography>
                                                );
                                            } else {
                                                return "";
                                            }
                                        })}
                                    </div>
                                );
                            }}
                        />
                    </Fragment>
                    {/*<Scheduler*/}
                    {/*    view="month"*/}
                    {/*    events={[*/}
                    {/*        {*/}
                    {/*            event_id: 1,*/}
                    {/*            title: "Event 1",*/}
                    {/*            subtitle: 'Doctor 1',*/}
                    {/*            start: new Date("2024/7/24 09:30"),*/}
                    {/*            end: new Date("2024/7/24 10:30"),*/}
                    {/*            color: '#2b2762',*/}
                    {/*            avatar: 'https://picsum.photos/200/300'*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            event_id: 2,*/}
                    {/*            title: "Event 2",*/}
                    {/*            start: new Date("2024/7/27 10:00"),*/}
                    {/*            end: new Date("2024/7/27 11:00"),*/}
                    {/*            color: '#c431c9'*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context: any) {
    const { locale } = context;
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: { destination: `/${locale === 'uk' ? '' : `${locale}/`}auth/signin` }
        };
    }

    return {
        props: {
            session,
            locale,
            messages: {
                ...require(`../../messages/${locale}.json`)
            }
        }
    };
}
