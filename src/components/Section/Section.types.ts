import type { ReactNode } from 'react';

import type { PaperProps } from '@mui/material';

export type SectionProps = {
    /**
     * The main title displayed at the top of the section.
     */
    heading?: string;

    /**
     * Optional descriptive text displayed below the heading.
     */
    subHeading?: string;

    /**
     * Optional icon element displayed next to the heading.
     */
    icon?: ReactNode;

    /**
     * The content to render inside the section.
     */
    children: ReactNode;
} & PaperProps;
