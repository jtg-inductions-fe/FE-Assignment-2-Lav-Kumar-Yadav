import {
    FacebookOutlined,
    GitHub,
    SportsBasketball,
    Twitter,
} from '@mui/icons-material';

import type { FooterConfigType } from './Footer.type';

export const footerConfig: FooterConfigType = {
    description: '© 2021 Themesberg, LLC. All rights reserved.',
    socialMedia: [
        {
            Icon: FacebookOutlined,
            url: 'https://www.facebook.com',
            label: 'Facebook',
        },
        {
            Icon: Twitter,
            url: 'https://x.com',
            label: 'X (twitter)',
        },
        {
            Icon: GitHub,
            url: 'https://www.github.com',
            label: 'Github',
        },
        {
            Icon: SportsBasketball,
            url: 'https://dribbble.com',
            label: 'Dribble',
        },
    ],
};
