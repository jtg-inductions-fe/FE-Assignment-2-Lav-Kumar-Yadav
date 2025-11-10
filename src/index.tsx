import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router';
import { router } from 'router/routes';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ErrorProvider } from '@contexts';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

/**
 * Initializes and renders the React application to the DOM.
 *
 * Uses React's `createRoot` API to enable concurrent rendering.
 * Wraps the app with:
 * - React `StrictMode` for highlighting potential problems.
 * - MUI's `ThemeProvider` to apply the custom theme globally.
 * - `CssBaseline` for consistent baseline styling across browsers.
 * - React Router's `RouterProvider` to handle client-side routing with the configured router.
 *
 * @param  rootElement - The DOM element where the React app is mounted.
 */
createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorProvider>
                <RouterProvider router={router} />
            </ErrorProvider>
        </ThemeProvider>
    </StrictMode>,
);
