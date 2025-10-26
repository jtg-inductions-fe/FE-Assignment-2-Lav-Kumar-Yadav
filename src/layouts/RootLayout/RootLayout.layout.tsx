import { useState } from 'react';

import { Outlet } from 'react-router';

import { Grid2 as Grid } from '@mui/material';

import { Footer, SideBar } from '@components';
import { Header } from '@containers';

import { sidebarBottomIcon, sideBarConfig } from './sidebar.config';

/**
 * @returns A Layout included Header, Sidebar, and MainContent
 */
export const RootLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

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
                    onClose={() => setIsSideBarOpen(false)}
                />
            </Grid>
            <Grid>
                <Outlet />
                <Footer />
            </Grid>
        </Grid>
    );
};
