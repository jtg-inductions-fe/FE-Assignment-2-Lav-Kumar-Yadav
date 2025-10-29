import { Outlet } from 'react-router';

import { Container } from '@mui/material';

import { Footer } from '@components';
import { Header } from '@containers';

export const RootLayout = () => (
    <>
        <Header />
        <Container
            maxWidth="xxl"
            sx={(theme) => ({
                marginTop: theme.spacing(26),
            })}
        >
            <Outlet />
            <Footer />
        </Container>
    </>
);
