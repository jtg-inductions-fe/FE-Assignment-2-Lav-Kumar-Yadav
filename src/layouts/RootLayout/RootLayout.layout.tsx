import { Outlet } from 'react-router';

import { Container } from '@mui/material';

import { Footer, Header } from '@components';
import { theme } from '@theme';

export const RootLayout = () => (
    <>
        <Header />
        <Container
            maxWidth="xxl"
            sx={{
                marginTop: theme.spacing(20),
            }}
        >
            <Outlet />
            <Footer />
        </Container>
    </>
);
