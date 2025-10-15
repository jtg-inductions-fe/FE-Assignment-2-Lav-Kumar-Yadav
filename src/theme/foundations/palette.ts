import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/**
 * Custom color palette configuration overriding MUI's default palette options.
 *
 * Defines the primary, secondary, background, text, and feedback colors
 * used throughout the app for consistent theming and UI styling.
 *
 * Colors are sourced from a centralized `COLORS` object for maintainability.
 *
 * Palette sections include:
 * - `primary`: Main brand color with contrast text.
 * - `secondary`: Supporting accent colors with light, dark, and contrast variations.
 * - `background`: Default and paper background colors.
 * - `text`: Primary, secondary, and disabled text colors.
 * - `success`, `error`, `info`: Feedback colors with main and contrast text.
 * - `action`: Colors for UI states like selected.
 *
 * @type {import('@mui/material/styles').PaletteOptions}
 */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.GREEN[500],
        contrastText: COLORS.WHITE,
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
        main: COLORS.GREEN[100],
        contrastText: COLORS.GREEN[800],
    },
    error: {
        main: COLORS.RED[200],
        contrastText: COLORS.RED[800],
    },
    info: {
        main: COLORS.BLUE[100],
        contrastText: COLORS.BLUE[800],
    },
    action: {
        selected: COLORS.GREY[100],
    },
    secondary: {
        main: COLORS.GREY[700],
        light: COLORS.GREY[400],
        contrastText: COLORS.GREY[200],
        dark: COLORS.BLACK,
    },
};
