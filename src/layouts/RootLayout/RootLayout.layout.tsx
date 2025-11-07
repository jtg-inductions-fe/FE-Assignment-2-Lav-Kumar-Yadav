import { useState } from 'react';

import { Outlet } from 'react-router';

import { Container, Grid2 as Grid } from '@mui/material';

import { ErrorBoundary, SideBar } from '@components';
import { Header } from '@containers';
import { RouteErrorFallback } from '@containers';

import { sidebarBottomIcon, sideBarConfig } from './sidebar.config';

/**
 * @returns A Grid-based responsive layout with Header, collapsible Sidebar, and main content area
 */
export const RootLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

    const handleSidebarClose = () => setIsSideBarOpen(false);

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
                        {isSidebarVisible && (
                            <SideBar
                                open={isSideBarOpen}
                                sideBarConfig={sideBarConfig}
                                sidebarBottomIcon={sidebarBottomIcon}
                                aria-label="Sidebar"
                                onClose={handleSidebarClose}
                            />
                        )}
                    </Grid>
                    <Grid size="grow" paddingX={5}>
                        <main>
                            <ErrorBoundary
                                fallback={RouteErrorFallback}
                                fallbackProps={{ setIsSidebarVisible }}
                            >
                                <Outlet context={setIsSidebarVisible} />
                            </ErrorBoundary>
                        </main>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
