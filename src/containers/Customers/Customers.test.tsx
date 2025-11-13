import { describe, expect, it, vi } from 'vitest';

import * as Comp from '@components';
import { useCustomers } from '@hooks';
import { render } from '@lib';
import { screen } from '@testing-library/react';

import { Customers } from './Customers.container';

vi.mock(import('@hooks'), () => ({
    useCustomers: vi.fn(),
}));
describe('Customers', () => {
    it('should render skeleton and should display heading of customers', () => {
        vi.spyOn(Comp, 'StatListItemSkeleton');
        vi.mocked(Comp.StatListItemSkeleton).mockReturnValue(
            <div>Skeleton Rendering</div>,
        );

        vi.mocked(useCustomers).mockReturnValue({
            data: [],
            error: undefined,
            isLoading: true,
        });

        render({ children: <Customers /> });

        expect(screen.getAllByText(/skeleton/i)).toHaveLength(6);
        expect(screen.getByRole('heading').textContent).toBe(
            'Latest Customers',
        );
    });

    it('should display no customers if not loading and no Error and data length  0', () => {
        vi.mocked(useCustomers).mockReturnValue({
            data: [],
            error: undefined,
            isLoading: false,
        });
        render({ children: <Customers /> });

        expect(screen.getByText(/no customers/i)).toBeInTheDocument();
        expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('should through error if there is error', () => {
        vi.mocked(useCustomers).mockReturnValue({
            data: undefined,
            error: 'data not fetched',
            isLoading: false,
        });

        render({
            children: (
                <Comp.ErrorBoundary fallback={<h1>Error Page</h1>}>
                    <Customers />{' '}
                </Comp.ErrorBoundary>
            ),
        });

        expect(screen.getByText(/error/i)).toBeInTheDocument();
    });

    it('should render list of customers', () => {
        vi.mocked(useCustomers).mockReturnValue({
            data: [
                {
                    name: {
                        title: 'Mr.',
                        first: 'Lav',
                        last: 'Kumar',
                    },
                    email: 'lav@gmail.com',
                    picture: {
                        large: 'xyz',
                        medium: 'xyz',
                        thumbnail: 'xyz',
                    },
                    sale: 500,
                },
                {
                    name: {
                        title: 'Mr.',
                        first: 'Test',
                        last: 'xyz',
                    },
                    email: 'test@gmail.com',
                    picture: {
                        large: 'xyz',
                        medium: 'xyz',
                        thumbnail: 'xyz',
                    },
                    sale: 600,
                },
            ],
            error: '',
            isLoading: false,
        });
        render({ children: <Customers /> });
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(2);
        expect(screen.getAllByRole('img')).toHaveLength(2);
        expect(screen.getByText(/lav kumar/i)).toBeInTheDocument();
        expect(screen.getByText(/lav@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
        expect(screen.queryByText(/no customers/i)).not.toBeInTheDocument();
    });
});
