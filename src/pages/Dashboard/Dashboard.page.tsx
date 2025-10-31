import { Hero, Sales } from '@components';

import { heroConfig } from './hero.config';
import { salesData } from './sales.config';

export const Dashboard = () => (
    <>
        <Hero config={heroConfig} />
        <Sales config={salesData} />
    </>
);
