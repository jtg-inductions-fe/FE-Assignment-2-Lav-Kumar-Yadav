export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
    }
}

export declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxl: true;
    }
    interface Palette {
        shadows: {
            main: string;
        };
    }

    interface PaletteOptions {
        shadows?: {
            main?: string;
        };
    }
}
