import { NotFoundFallback } from 'components/NotFoundFallback';
import { createMemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { Person, Settings } from '@mui/icons-material';

import { render } from '@lib';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { SideBar } from './SideBar.component';
import type { SidebarBottomIconType, SidebarConfigType } from './SideBar.types';

describe('SideBar', () => {
    const sideBarConfigMock: SidebarConfigType = [
        {
            id: '1',
            type: 'listItem',
            title: 'Link-1',
            path: '/link-1',
            icon: Person,
        },
        {
            id: '2',
            type: 'listItem',
            title: 'button-1',
            subMenu: [
                {
                    id: '3',
                    type: 'listItem',
                    title: 'link-2',
                    path: '/link-2',
                },
            ],
        },
    ];

    const sidebarBottomIconMock: SidebarBottomIconType = [
        {
            icon: Settings,
            label: 'settings',
            path: '/settings',
        },
    ];

    const setup = (initialPath = '/') => {
        const router = createMemoryRouter(
            [
                {
                    path: '/',
                    id: 'sidebar',
                    element: (
                        <SideBar
                            open
                            sideBarConfig={sideBarConfigMock}
                            sidebarBottomIcon={sidebarBottomIconMock}
                        />
                    ),
                },
                {
                    path: '/link-1',
                    element: <div>Link-1 Page</div>,
                },
                {
                    path: '/link-2',
                    element: <div>Link-2 Page</div>,
                },
                {
                    path: '/settings',
                    element: <div>settings Page</div>,
                },
                {
                    id: 'not-found',
                    path: '*',
                    element: <NotFoundFallback />,
                },
            ],
            { initialEntries: [initialPath] },
        );

        return render({ router: router });
    };

    it('icon should be in the dom', () => {
        setup();
        expect(screen.getByTestId(/PersonIcon/i)).toBeInTheDocument();
    });

    it('should navigate to direct link path', async () => {
        setup();
        const user = userEvent.setup();

        const menuLink = screen.getByText('Link-1');
        expect(menuLink).toBeInTheDocument();

        await user.click(menuLink);

        expect(await screen.findByText('Link-1 Page')).toBeInTheDocument();
    });

    it('should open submenu and navigate to submenu link path', async () => {
        setup();
        const user = userEvent.setup();

        const menuButton = screen.getByText('button-1');
        expect(menuButton).toBeInTheDocument();

        await user.click(menuButton);

        const subMenuLink = await screen.findByText('link-2');
        expect(subMenuLink).toBeInTheDocument();

        await user.click(subMenuLink);

        expect(await screen.findByText('Link-2 Page')).toBeInTheDocument();
    });

    it('sidebar should not display in desktop if page is notFoundFallback', () => {
        setup('/not-found');
        window.innerWidth = 1000;
        const list = screen.queryByRole('list');
        expect(list).not.toBeInTheDocument();
    });

    it('should render the bottom icon and link should redirect', async () => {
        setup();

        const settings = screen.getByTestId(/SettingsIcon/i);
        expect(settings).toBeInTheDocument();
        const user = userEvent.setup();
        await user.click(settings);

        expect(await screen.findByText(/settings/i)).toBeInTheDocument();
    });
});
