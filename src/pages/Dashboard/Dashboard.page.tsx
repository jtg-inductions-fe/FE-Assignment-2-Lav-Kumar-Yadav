import { Hero } from '@components';

import { heroConfig } from './hero.config';

export const Dashboard = () => (
    <>
        <Hero config={heroConfig} aria-label="Hero image gallery" />
    </>
);
