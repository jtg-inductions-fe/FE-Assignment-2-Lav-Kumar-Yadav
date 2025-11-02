import { useState } from 'react';

import { Outlet } from 'react-router';

import { Grid2 as Grid } from '@mui/material';

import { Footer, SideBar } from '@components';
import { Header } from '@containers';

import { sidebarBottomIcon, sideBarConfig } from './sidebar.config';

/**
 * @returns A Grid-based responsive layout with Header, collapsible Sidebar, and main content area
 */
export const RootLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const handleSidebarClose = () => setIsSideBarOpen(false);

    return (
        <Grid container>
            <Grid size={12} height={60}>
                <Header setIsSidebarOpen={setIsSideBarOpen} />
            </Grid>
            <Grid width={{ xs: 0, md: 300 }}>
                <SideBar
                    open={isSideBarOpen}
                    sideBarConfig={sideBarConfig}
                    sidebarBottomIcon={sidebarBottomIcon}
                    aria-label="Sidebar"
                    onClose={handleSidebarClose}
                />
            </Grid>
            <Grid>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Grid>
        </Grid>
    );
};
