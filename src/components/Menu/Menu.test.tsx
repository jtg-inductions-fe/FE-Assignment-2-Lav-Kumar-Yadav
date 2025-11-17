import { describe, expect, it } from 'vitest';

import { Person } from '@mui/icons-material';

import { render } from '@lib';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Menu } from './Menu.component';
import type { MenuConfigItem } from './Menu.types';

import '@testing-library/jest-dom';

describe('Menu Component', () => {
    const config: MenuConfigItem[] = [
        {
            type: 'menuItem',
            option: 'Profile',
            Icon: Person,
        },
        {
            type: 'divider',
        },
        {
            type: 'custom',
            node: <div data-testid="custom-node">Custom Content</div>,
        },
    ];

    const setup = () =>
        render({
            children: (
                <Menu
                    config={config}
                    iconAriaLabel="menu-trigger"
                    menuAriaLabel="profile-menu"
                >
                    <span>Open Menu</span>
                </Menu>
            ),
        });

    it('renders trigger button', () => {
        setup();
        expect(screen.getByLabelText('menu-trigger')).toBeInTheDocument();
    });

    it('opens the menu when trigger is clicked', async () => {
        const user = userEvent.setup();
        setup();

        const trigger = screen.getByLabelText('menu-trigger');
        await user.click(trigger);

        expect(screen.getByLabelText('profile-menu')).toBeVisible();
    });

    it('renders all menu item types', async () => {
        const user = userEvent.setup();
        setup();

        await user.click(screen.getByLabelText('menu-trigger'));

        // menuItem
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByTestId('PersonIcon')).toBeInTheDocument();

        // custom
        expect(screen.getByTestId('custom-node')).toBeInTheDocument();

        // divider
        expect(screen.getAllByRole('separator')).toHaveLength(1);
    });
});
