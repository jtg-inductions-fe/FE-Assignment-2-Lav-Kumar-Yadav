import { Section, Table } from '@components';
import { useTransactions } from '@hooks';

import { transactionsTableConfig } from './transactionsTable.config';

/**
 * Transactions container used to represent Transaction Table
 * @returns Transactions Table
 */
export const Transactions = () => {
    const { data: transactions } = useTransactions();

    return (
        <Section
            heading="Transactions"
            subHeading="This is a list of latest transactions."
            spaceBelowHeading={4}
        >
            <Table
                data={transactions}
                aria-label="Transactions Table"
                tableConfig={transactionsTableConfig}
                sx={{
                    height: 460,
                    overflowY: 'auto',
                }}
            />
        </Section>
    );
};
