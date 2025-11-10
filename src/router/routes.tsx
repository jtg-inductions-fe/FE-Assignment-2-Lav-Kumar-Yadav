import { createBrowserRouter } from 'react-router';

import { NotFoundFallback } from '@components';
import { RootLayout } from '@layouts';
import { Dashboard } from '@pages';

/**
 * Application router configuration using react-router's createBrowserRouter.
 *
 * Defines the route hierarchy for the web app:
 * - The root path '/' uses the RootLayout component as the layout wrapper.
 * - The index route (default child of '/') renders the Dashboard component.
 * - Any unmatched route ('*') renders the NotFound component to handle 404s.
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        id: 'root',
        children: [
            {
                index: true,
                element: <Dashboard />,
                id: 'dashboard',
            },
            {
                path: '/products/:productId',
                element: <NotFoundFallback />,
                id: 'not-found-product',
            },
            {
                path: '*',
                element: <NotFoundFallback />,
                id: 'not-found',
            },
        ],
    },
]);
