export enum PaginationType {
    FILIALS = 'filials',
    ROLES = 'roles',
    CUSTOMERS = 'customers',
    MCATEGORIES = 'mcategories',
    PRODUCERS = 'producers',
    MATERIALS = 'materials',
    INCOMINGINVOICES = 'incominginvoices',
    OUTGOINGINVOICES = 'outgoinginvoices',
    CHANGEINVOICES = 'changeinvoices',
    CURRENCY = 'currencies',
    CABINETS = 'cabinets',
    SERVCATEGORIES = 'servcategories',
    UNITS = 'units',
    PATIENTS = 'patients',
    STORES = 'stores'
}
export const TableHeaders = {
    [PaginationType.FILIALS]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.address', className: '' },
        { titleKey: 'datatable.inn', className: '' },
        { titleKey: 'datatable.edrpou', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.ROLES]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.CUSTOMERS]: [
        { titleKey: 'datatable.photo', className: '' },
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.phone', className: '' },
        { titleKey: 'datatable.inn', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.STORES]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.filial', className: '' },
        { titleKey: 'datatable.ceo_store', className: '' },
        { titleKey: 'datatable.address', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.MCATEGORIES]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.producer', className: '' },
        { titleKey: 'datatable.percent', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.PRODUCERS]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.CABINETS]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.filial', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.MATERIALS]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.price', className: '' },
        { titleKey: 'datatable.retailprice', className: '' },
        { titleKey: 'datatable.percent', className: '' },
        { titleKey: 'datatable.category', className: '' },
        { titleKey: 'datatable.producer', className: '' },
        { titleKey: 'datatable.unit', className: '' },
        { titleKey: 'datatable.size', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.INCOMINGINVOICES]: [
        { titleKey: 'datatable.number', className: '' },
        { titleKey: 'datatable.date', className: '' },
        { titleKey: 'datatable.status', className: '' },
        { titleKey: 'datatable.store', className: '' },
        { titleKey: 'datatable.producer', className: '' },
        { titleKey: 'datatable.customer', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.CHANGEINVOICES]: [
        { titleKey: 'datatable.number', className: '' },
        { titleKey: 'datatable.date', className: '' },
        { titleKey: 'datatable.status', className: '' },
        { titleKey: 'datatable.storefrom', className: '' },
        { titleKey: 'datatable.storeto', className: '' },
        { titleKey: 'datatable.customer', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.OUTGOINGINVOICES]: [
        { titleKey: 'datatable.number', className: '' },
        { titleKey: 'datatable.date', className: '' },
        { titleKey: 'datatable.status', className: '' },
        { titleKey: 'datatable.store', className: '' },
        { titleKey: 'datatable.producer', className: '' },
        { titleKey: 'datatable.customer', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.CURRENCY]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.symbol', className: '' },
        { titleKey: 'datatable.rate', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.SERVCATEGORIES]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],
    [PaginationType.UNITS]: [
        { titleKey: 'datatable.name', className: '' },
        { titleKey: 'datatable.actions', className: 'text-right' }
    ],

};
export const InvoiceStatuses = [
    {id: 'new', value: 'new'},
    {id: 'issued', value: 'issued'},
    {id: 'incoming', value: 'incoming'},
    {id: 'outgoing', value: 'outgoing'},
    {id: 'move', value: 'move'}
]

export const SchedulerStatuses = [
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
]
