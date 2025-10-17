import type { BreakpointsOptions } from '@mui/material/styles';

/**
 * Custom MUI breakpoints with added `xxl` at 1920px.
 * Standard breakpoints: xs (0), sm (320), md (768), lg (1024), xl (1440).
 * Use these for consistent responsive design across the app.
 */
export const breakpoints: BreakpointsOptions = {
    values: {
        xs: 0,
        sm: 320,
        md: 768,
        lg: 1024,
        xl: 1440,
        xxl: 1920,
    },
};
