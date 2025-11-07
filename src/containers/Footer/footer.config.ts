import {
    FacebookOutlined,
    GitHub,
    SportsBasketball,
    Twitter,
} from '@mui/icons-material';

import type { SocialMediaConfigType } from './Footer.type';

export const socialMediaConfig: SocialMediaConfigType = [
    {
        Icon: FacebookOutlined,
        url: 'https://www.facebook.com',
        label: 'Facebook',
    },
    {
        Icon: Twitter,
        url: 'https://x.com',
        label: 'X (Twitter)',
    },
    {
        Icon: GitHub,
        url: 'https://www.github.com',
        label: 'GitHub',
    },
    {
        Icon: SportsBasketball,
        url: 'https://dribbble.com',
        label: 'Dribbble',
    },
];
