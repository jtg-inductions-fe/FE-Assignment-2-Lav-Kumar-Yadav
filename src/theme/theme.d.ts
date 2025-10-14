export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h1: React.CSSProperties;
        h2: React.CSSProperties;
        h3: React.CSSProperties;
        text1: React.CSSProperties;
        text2: React.CSSProperties;
        text3: React.CSSProperties;
        text4: React.CSSProperties;
        text5: React.CSSProperties;
        text6: React.CSSProperties;
        text7: React.CSSProperties;
        text8: React.CSSProperties;
        text9: React.CSSProperties;
        text10: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        h1: React.CSSProperties;
        h2: React.CSSProperties;
        h3: React.CSSProperties;
        text1: React.CSSProperties;
        text2: React.CSSProperties;
        text3: React.CSSProperties;
        text4: React.CSSProperties;
        text5: React.CSSProperties;
        text6: React.CSSProperties;
        text7: React.CSSProperties;
        text8: React.CSSProperties;
        text9: React.CSSProperties;
        text10: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        // removes the default keys
        h4: false;
        h5: false;
        h6: false;
        body1: false;
        body2: false;
        button: false;
        caption: false;
        overline: false;
        subtitle1: false;
        subtitle2: false;
        // allows only our customs
        h1: true;
        h2: true;
        h3: true;
        text1: true;
        text2: true;
        text3: true;
        text4: true;
        text5: true;
        text6: true;
        text7: true;
        text8: true;
        text9: true;
        text10: true;
    }
}
