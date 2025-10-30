import {
    BrowserUpdated,
    Description,
    Layers,
    LocalMall,
    Lock,
    PieChart,
    Public,
    Settings,
    Support,
    TextSnippet,
    Tune,
} from '@mui/icons-material';

import type { SidebarBottomIconType, SidebarConfigType } from '@components';

export const sideBarConfig: SidebarConfigType = [
    {
        id: 'aJ3v2',
        type: 'listItem',
        title: 'Overview',
        path: '/overview',
        icon: PieChart,
    },
    {
        id: 'tN5k7',
        type: 'listItem',
        title: 'Pages',
        icon: Description,
        subMenu: [
            {
                id: 'Xm3F6',
                type: 'listItem',
                title: 'User Settings',
                path: '/pages/user-settings',
            },
            {
                id: 'Cp7J2',
                type: 'listItem',
                title: 'Reports',
                path: '/pages/reports',
            },
            {
                id: 'Fg8P9',
                type: 'listItem',
                title: 'Analytics',
                path: '/pages/analytics',
            },
            {
                id: 'Zh4Q2',
                type: 'listItem',
                title: 'Audit Logs',
                path: '/pages/audit-logs',
            },
            {
                id: 'Kx7E3',
                type: 'listItem',
                title: 'Billing Settings',
                path: '/pages/billing-settings',
            },
            {
                id: 'Rt9B1',
                type: 'listItem',
                title: 'Notifications',
                path: '/pages/notifications',
            },
        ],
    },
    {
        id: 'Qx4A1',
        type: 'listItem',
        title: 'Sales',
        icon: LocalMall,
        subMenu: [
            {
                id: 'Bz9p0',
                type: 'listItem',
                title: 'Product List',
                path: '/sales/product-list',
            },
            {
                id: 'Lp8T3',
                type: 'listItem',
                title: 'Billing',
                path: '/sales/billing',
            },
            {
                id: 'Rk2mY',
                type: 'listItem',
                title: 'Invoice',
                path: '/sales/invoice',
            },
            {
                id: 'Vj5H7',
                type: 'listItem',
                title: 'Discounts',
                path: '/sales/discounts',
            },
            {
                id: 'Wt4Mn',
                type: 'listItem',
                title: 'Orders',
                path: '/sales/orders',
            },
        ],
    },
    {
        id: 'Vn5hZ',
        type: 'listItem',
        title: 'Messages',
        icon: BrowserUpdated,
        badge: 1,
        path: '/messages',
    },
    {
        id: 'Wq7b1',
        type: 'listItem',
        title: 'Authentication',
        icon: Lock,
        subMenu: [
            {
                id: 'Bt9K2',
                type: 'listItem',
                title: 'Login',
                path: '/authentication/login',
            },
            {
                id: 'Pr8J3',
                type: 'listItem',
                title: 'Register',
                path: '/authentication/register',
            },
            {
                id: 'Nm4F9',
                type: 'listItem',
                title: 'Forgot Password',
                path: '/authentication/forgot-password',
            },
        ],
    },
    {
        id: 'xyHv0',
        type: 'divider',
    },
    {
        id: 'Pj6Vt',
        type: 'listItem',
        title: 'Docs',
        icon: TextSnippet,
        path: '/docs',
    },
    {
        id: 'Ox0D3',
        type: 'listItem',
        title: 'Components',
        icon: Layers,
        path: '/components',
    },
    {
        id: 'Kf4Wm',
        type: 'listItem',
        title: 'Help',
        icon: Support,
        path: '/help',
    },
];

export const sidebarBottomIcon: SidebarBottomIconType = [
    {
        icon: Tune,
        path: '/filter',
        label: 'Filter',
    },
    {
        icon: Public,
        path: '/community',
        label: 'Community',
    },
    {
        icon: Settings,
        path: '/settings',
        label: 'Settings',
    },
];
