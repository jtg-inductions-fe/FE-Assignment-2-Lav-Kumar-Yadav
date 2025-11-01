import { CircularProgress } from '@mui/material';

import { ImageGallery } from '@components';
import { useGallery } from '@hooks';

import { HeroLayoutConfig } from './HeroLayout.config';

export const Hero = () => {
    const { data: gallery, isLoading, error } = useGallery();

    const heroConfig = gallery.slice(0, 4).map((obj, index) => ({
        ...obj,
        ...HeroLayoutConfig[index],
    }));

    if (isLoading) {
        return <CircularProgress size={80} />;
    }

    if (error) {
        return <div>Failed to load gallery. Please try again.</div>;
    }

    return <ImageGallery config={heroConfig} aria-label="Hero Image Gallery" />;
};
