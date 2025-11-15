import { Delete, Person } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { theme } from '@theme';

import { Menu } from './Menu.component';

const meta = {
    title: 'Menu',
    component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuStory: Story = {
    args: {
        config: [
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 1',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 2',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 3',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 4',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 5',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 6',
            },
            {
                type: 'menuItem',
                Icon: Delete,
                option: 'Option 7',
            },
        ],
        children: <Person />,
    },
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Menu {...args} />
        </ThemeProvider>
    ),
};
