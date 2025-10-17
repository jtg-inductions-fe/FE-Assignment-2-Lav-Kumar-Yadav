import { Outlet } from 'react-router';

import { Footer, Header } from '@components';

export const RootLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
