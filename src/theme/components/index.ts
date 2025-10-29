import type { Components } from '@mui/material/styles';

// Local Font files
import InterVariableFont from '@assets/fonts/inter/Inter-VariableFontWght.ttf';

const fontFaceDeclarations = `
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        src: url(${InterVariableFont}) format('truetype-variations');
        font-weight: 100 500;
        font-style: normal;
    }
    html{
        font-size:62.5%;
    }
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: fontFaceDeclarations,
    },
};
