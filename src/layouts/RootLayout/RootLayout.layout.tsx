import { Outlet } from 'react-router';

import { Container, useTheme } from '@mui/material';

import { Footer, Header } from '@components';

export const RootLayout = () => {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Container
                maxWidth="xxl"
                sx={{
                    marginTop: theme.spacing(26),
                }}
            >
                <Outlet />
                <Footer />
            </Container>
        </>
    );
};
