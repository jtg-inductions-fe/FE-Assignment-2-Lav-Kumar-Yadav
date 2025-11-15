import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { theme } from '@theme';

import { Section } from './Section.component';

const meta = {
    title: 'Section',
    component: Section,
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionStory: Story = {
    args: {
        children: <h1>Hello I am Section Component</h1>,
    },
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Section {...args} />
        </ThemeProvider>
    ),
};
