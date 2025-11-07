import type { ButtonProps } from '@mui/material';

export type StatusFallbackProps = {
    /**fallback image */
    image?: string;

    /**fallback title */
    title: string;

    /**fallback body text */
    body: string;

    /** array of props for multiple buttons */
    buttons: ({ to?: string } & ButtonProps)[];
};
