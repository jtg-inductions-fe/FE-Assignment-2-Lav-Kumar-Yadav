import { ImageGallery } from '@components';
import { useGallery } from '@hooks';

export const Hero = () => {
    const { data: gallery } = useGallery();

    return <ImageGallery config={gallery} aria-label="Hero Image Gallery" />;
};
