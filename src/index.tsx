import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import NotFound from 'components/NotFound';
import Dashboard from 'pages/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from 'RootLayout';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
