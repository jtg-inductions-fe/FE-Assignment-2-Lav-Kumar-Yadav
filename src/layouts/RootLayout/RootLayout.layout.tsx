import { useState } from 'react';

import { Outlet } from 'react-router';

import { Container, Grid2 as Grid } from '@mui/material';

import { SideBar } from '@components';
import { Header } from '@containers';

import { sidebarBottomIcon, sideBarConfig } from './sidebar.config';

/**
 * @returns A Grid-based responsive layout with Header, collapsible Sidebar, and main content area
 */
export const RootLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
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
                        <SideBar
                            open={isSideBarOpen}
                            sideBarConfig={sideBarConfig}
                            sidebarBottomIcon={sidebarBottomIcon}
                            aria-label="Sidebar"
                            onClose={handleSidebarClose}
                        />
                    </Grid>
                    <Grid size="grow" paddingX={5}>
                        <main>
                            <Outlet />
                        </main>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
