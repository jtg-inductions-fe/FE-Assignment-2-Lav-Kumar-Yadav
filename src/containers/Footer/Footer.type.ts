import type { ElementType } from 'react';

export type SocialMediaConfigType = {
    /**
     * social media icon to show
     */
    Icon: ElementType;

    /**
     * url for the social media
     */
    url: string;

    /**
     * label which will be used as aria-label with social media icon
     */
    label: string;
}[];
