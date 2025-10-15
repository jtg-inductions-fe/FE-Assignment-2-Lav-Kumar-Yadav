import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@components';

export const RootLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
