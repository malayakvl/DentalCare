import { createSelector } from 'reselect';

// ------------------------------------
// Selectors
// ------------------------------------
const rootSelector = createSelector(
    (state: State.Root) => state.scheduler,
    (scheduler: State.Scheduler): State.Scheduler => scheduler
);

export const showSchedulerModalSelector = createSelector(
    rootSelector,
    (scheduler: State.Scheduler): any => scheduler.showModalscheduler
);
export const eventsSelector = createSelector(
    rootSelector,
    (scheduler: State.Scheduler): any => scheduler.items
);
// export const eventsDateSelector = createSelector(
//     rootSelector,
//     (scheduler: State.Scheduler): any => scheduler.eventDate
// );
// export const eventsSectionIdSelector = createSelector(
//     rootSelector,
//     (scheduler: State.Scheduler): any => scheduler.sectionId
// );
export const eventsDataSelector = createSelector(
    rootSelector,
    (scheduler: State.Scheduler): any => scheduler.event
);
