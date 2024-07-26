// Each table pagination and controls meta stored to redux separately
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const baseApiUrl = publicRuntimeConfig.apiUrl;
export const siteUrl = publicRuntimeConfig.siteUrl;
export const localUrl = publicRuntimeConfig.localUrl;

export enum PaginationType {
    CLINICS = 'clinics',
    DASHBOARD = 'dashboard',
    NOTIFICATIONS = 'notifications',
    STORES = 'stores'
}

export const TableHeaders: { [key in PaginationType]: Type.DataTableHeader[] } = {
    [PaginationType.CLINICS]: [
        { sortKey: 'name', titleKey: 'Clinic Name' },
        { titleKey: 'Address', className: 'inventory-publish' },
        { titleKey: 'Actions', className: 'actions' }
    ],
    [PaginationType.DASHBOARD]: [],
    [PaginationType.STORES]: [
        { sortKey: 'name', titleKey: 'Store Name' },
        { titleKey: 'Address', className: 'inventory-publish' },
        { titleKey: 'Actions', className: 'actions' }
    ],
    [PaginationType.NOTIFICATIONS]: [],
};

export enum OrderStatus {
    NEW = 'new',
    PAYED = 'payed',
    SHIPPED = 'shipped',
    CANCELED = 'canceled'
}

export enum UserRole {
    ADMIN = 3,
    CUSTOMER = 2,
    BUYER = 1
}
