import type { ButtonProps } from '@mui/material';

export type StatusFallbackProps = {
    /**fallback image */
    illustration?: string;

    /**fallback title */
    title?: string;

    /** fallback subtitle  */
    subTitle?: string;

    /**fallback body text */
    content: string;

    /** array of props for multiple buttons */
    actionButtons: ({ to?: string } & ButtonProps)[];
};
