import type { ReactNode } from 'react';
import { RouterProvider, type RouterProviderProps } from 'react-router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ErrorProvider } from '@contexts';
import { render as reactTestingRender } from '@testing-library/react';
import { theme } from '@theme';

type RenderOptions =
    | {
          router: RouterProviderProps['router'];
          children?: never;
      }
    | {
          children: ReactNode;
          router?: never;
      };

export const render = ({ router, children }: RenderOptions) => {
    reactTestingRender(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorProvider>
                {router && <RouterProvider router={router} />}
                {children}
            </ErrorProvider>
        </ThemeProvider>,
    );
};
