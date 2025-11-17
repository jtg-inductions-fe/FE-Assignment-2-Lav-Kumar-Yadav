import type { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';

import { InfoOutlined } from '@mui/icons-material';

import { render } from '@lib';
import { screen } from '@testing-library/react';

import { Section } from './Section.component';

describe('Section', () => {
    const setup = (props: {
        heading?: string;
        subHeading?: string;
        icon?: ReactNode;
    }) => {
        render({
            children: (
                <Section {...props}>
                    <span>I am the children of section</span>
                </Section>
            ),
        });
    };

    it('should render heading, subHeading and icon', () => {
        setup({
            heading: 'Heading',
            subHeading: 'SubHeading',
            icon: <InfoOutlined />,
        });
        expect(screen.getByText('Heading')).toBeInTheDocument();
        expect(screen.getByText(/subheading/i)).toBeInTheDocument();
        expect(screen.getByTestId(/InfoOutlinedIcon/i)).toBeInTheDocument();
        expect(screen.getByText(/children/i)).toBeInTheDocument();
    });

    it('should not render heading, subHeading and icon when no props passed', () => {
        setup({});
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.queryByText(/subheading/i)).not.toBeInTheDocument();
        expect(
            screen.queryByTestId(/InfoOutlinedIcon/i),
        ).not.toBeInTheDocument();
    });
});
