import type { BreakpointsOptions } from '@mui/material/styles';

/**
 * Custom breakpoint values overriding MUI's default theme breakpoints.
 *
 * This object defines screen widths (in pixels) for responsive design
 * using Material-UI's `BreakpointsOptions` type.
 *
 * Added a custom breakpoint `xxl` at 1920px in addition to the standard ones:
 * - xs: 0
 * - sm: 320
 * - md: 768
 * - lg: 1024
 * - xl: 1440
 * - xxl: 1920 (custom)
 *
 * These breakpoints can be used throughout the app for consistent
 * responsive styling and layout adjustments.
 *
 * @type {import('@mui/material/styles').BreakpointsOptions}
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
