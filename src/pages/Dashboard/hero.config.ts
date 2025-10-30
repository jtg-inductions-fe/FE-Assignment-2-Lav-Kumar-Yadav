import HeroImage1 from '@assets/images/hero-1.webp';
import HeroImage2 from '@assets/images/hero-2.webp';
import HeroImage3 from '@assets/images/hero-3.webp';
import HeroImage4 from '@assets/images/hero-4.webp';
import type { HeroConfigType } from '@components';

export const heroConfig: HeroConfigType = [
    {
        label: 'Image 1',
        src: HeroImage1,
        rows: 1,
        cols: 1,
    },
    {
        label: 'Image 2',
        src: HeroImage2,
        rows: 1,
        cols: 1,
    },
    {
        label: 'Image 3',
        src: HeroImage3,
        rows: 2,
        cols: 1,
    },
    {
        label: 'Image 4',
        src: HeroImage4,
        rows: 1,
        cols: 2,
    },
];
