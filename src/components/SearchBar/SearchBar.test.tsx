import { describe, expect, it } from 'vitest';

import { render } from '@lib';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBar } from './SearchBar.component';

describe('SearchBar', () => {
    const setup = () => {
        render({
            children: (
                <SearchBar options={['Apple', 'Banana', 'Cherry', 'Mango']} />
            ),
        });
    };

    it('should render combobox, should open a list when click on input box and should have text passed in props', async () => {
        setup();

        const user = userEvent.setup();
        const combobox = screen.getByRole('combobox');
        expect(combobox).toBeInTheDocument();
        await user.click(combobox);

        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Banana')).toBeInTheDocument();
        expect(screen.getByText('Cherry')).toBeInTheDocument();
        expect(screen.getByText('Mango')).toBeInTheDocument();
    });

    it('should show autocomplete suggestion when type in combobox', async () => {
        setup();
        const user = userEvent.setup();
        const combobox = screen.getByRole('combobox');
        await user.click(combobox);
        await user.keyboard('Ban');

        expect(screen.getByText('Banana')).toBeInTheDocument();
    });
});
