import { useState } from 'react';

import { Outlet } from 'react-router';

import { Container, Grid2 as Grid } from '@mui/material';

import { ErrorBoundary, SideBar } from '@components';
import { RouteErrorFallback } from '@components';
import { Footer, Header } from '@containers';

import { sidebarBottomIcon, sideBarConfig } from './sidebar.config';

/**
 * @returns A Grid-based responsive layout with Header, collapsible Sidebar, and main content area
 */
export const RootLayout = () => {
    const handleSidebarClose = () => setIsSideBarOpen(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

    return (
        <Container
            maxWidth="xxl"
            sx={{
                position: 'relative',
                width: '100%',
            }}
        >
            <Grid container>
                <Grid size={12} height={90}>
                    <Header setIsSidebarOpen={setIsSideBarOpen} />
                </Grid>
                <Grid container width="100%">
                    <Grid size={{ xs: 0, md: 'auto' }}>
                        <nav aria-label="sidebar">
                            <SideBar
                                open={isSideBarOpen}
                                sideBarConfig={sideBarConfig}
                                sidebarBottomIcon={sidebarBottomIcon}
                                onClose={handleSidebarClose}
                            />
                        </nav>
                    </Grid>
                    <Grid
                        size="grow"
                        paddingX={5}
                        height={'calc(100vh - 90px)'}
                        overflow={'auto'}
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '0.4em',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'success.contrastText',
                                borderRadius: 4,
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <main>
                            <ErrorBoundary fallback={<RouteErrorFallback />}>
                                <Outlet />
                            </ErrorBoundary>
                        </main>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
