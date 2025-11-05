import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: [
        '"Inter"',
        '"-apple-system"',
        '"BlinkMacSystemFont"',
        '"Segoe UI"',
        '"Roboto"',
        '"Helvetica Neue"',
        '"Arial"',
        '"sans-serif"',
    ].join(','),
    htmlFontSize: HTML_FONT_SIZE,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: typographyUtil.pxToRem(30),
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: 1.3,
        },
    },
    h2: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: 1.5,
    },
    h3: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: 1.5,
    },
    h4: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: 1.5,
    },
    h5: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
        },
    },
    h6: {
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
    },
    body1: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: 1.5,
    },
    body2: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: 1.4,
    },
    subtitle1: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontWeight: 600,
            fontSize: typographyUtil.pxToRem(14),
            lineHeight: 1.4,
        },
    },
    subtitle2: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
    },
    caption: {
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
            lineHeight: 1.4,
        },
    },
    overline: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: 1.5,
    },
});

export const typography = { typographyStyle, typographyUtil };
