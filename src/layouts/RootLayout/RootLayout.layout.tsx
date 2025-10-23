import { Outlet } from 'react-router';

import { Box, Container } from '@mui/material';

import { Footer, Header } from '@components';

export const RootLayout = () => (
    <Container maxWidth="xxl">
        <Header />
        <Box
            sx={{
                marginTop: 30,
            }}
        >
            <Outlet />
            <Footer />
        </Box>
    </Container>
);
