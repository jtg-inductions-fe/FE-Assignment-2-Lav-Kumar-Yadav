import type { ReactNode } from 'react';

import type { ListItemProps } from '@mui/material';

/**
 * Represents a single item in a statistics list.
 * Used to display a labeled entry with optional image and right-aligned content.
 */
export type StatListItemProps = {
    /**
     * The main label text of the list item.
     */
    label: string;

    /**
     * The secondary label text displayed below or beside the main label.
     */
    subLabel: string;

    /**
     * Optional image URL to display alongside the label.
     */
    imageSrc?: string;

    /**
     * The element displayed on the right side of the list item.
     */
    rightContent: ReactNode;
} & ListItemProps;
