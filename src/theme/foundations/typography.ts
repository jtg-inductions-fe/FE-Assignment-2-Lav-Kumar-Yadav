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
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontWeight: 700,
        fontSize: typographyUtil.pxToRem(30),
        lineHeight: typographyUtil.pxToRem(45),
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.4),
        },
    },
    h2: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(20),
        lineHeight: typographyUtil.pxToRem(30),
    },
    h3: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: typographyUtil.pxToRem(24),
    },
    text1: {
        fontWeight: 500,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: typographyUtil.pxToRem(24),
    },
    text2: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
        [theme.breakpoints.up('md')]: {
            fontWeight: 600,
            fontSize: typographyUtil.pxToRem(14),
            lineHeight: typographyUtil.pxToRem(20),
        },
    },
    text3: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: typographyUtil.pxToRem(24),
    },
    text4: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: typographyUtil.pxToRem(24),
    },
    text5: {
        fontWeight: 500,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
    },
    text6: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
    },
    text7: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: typographyUtil.pxToRem(20),
    },
    text8: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
    },
    text9: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
        },
    },
    text10: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
            lineHeight: typographyUtil.pxToRem(20),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };
