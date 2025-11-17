import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { theme } from '@theme';

import { SearchBar } from './SearchBar.component';

const meta = {
    title: 'Searchbar',
    component: SearchBar,
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        options: ['Apple', 'Mango', 'Cherry'],
    },
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SearchBar {...args} />
        </ThemeProvider>
    ),
};
export const Secondary: Story = {
    args: {
        options: [
            {
                label: 'Apple',
                value: 'apple',
            },
            {
                label: 'Banana',
                value: 'banana',
            },
            {
                label: 'Mango',
                value: 'mango',
            },
            {
                label: 'Cherry',
                value: 'cherry',
            },
        ],
    },
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SearchBar {...args} />
        </ThemeProvider>
    ),
};
