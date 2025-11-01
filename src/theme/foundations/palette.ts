import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/**
 * Custom MUI color palette overriding default options.
 * Uses centralized COLORS for consistent theming:
 * - primary, secondary, background, text, success, error, info, action colors.
 */

export const palette: PaletteOptions = {
    primary: {
        main: COLORS.GREEN[500],
        contrastText: COLORS.WHITE,
    },
    secondary: {
        main: COLORS.GREY[700],
        light: COLORS.GREY[400],
        dark: COLORS.BLACK,
        contrastText: COLORS.GREY[200],
    },
    background: {
        default: COLORS.GREY[50],
        paper: COLORS.WHITE,
    },
    text: {
        primary: COLORS.GREY[900],
        secondary: COLORS.GREY[600],
        disabled: COLORS.GREY[500],
    },
    success: {
        main: COLORS.GREEN[500],
        light: COLORS.GREEN[100],
        dark: COLORS.GREEN[800],
        contrastText: COLORS.WHITE,
    },
    error: {
        contrastText: COLORS.RED[800],
        main: COLORS.RED[200],
    },
    info: {
        main: COLORS.BLUE[800],
        light: COLORS.BLUE[100],
        contrastText: COLORS.WHITE,
    },
    action: {
        selected: COLORS.GREY[100],
    },
    shadows: {
        main: COLORS.GREY.ALPHA_50,
    },
};
