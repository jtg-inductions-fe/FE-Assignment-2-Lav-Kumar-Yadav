import { Section, Table, TableSkeleton } from '@components';
import { useTransactions } from '@hooks';

import { transactionsTableConfig } from './transactionsTable.config';

/**
 * Transactions container used to represent Transaction Table
 * @returns Transactions Table
 */
export const Transactions = () => {
    const { data: transactions, isLoading, error } = useTransactions();

    if (error) {
        throw new Error(error);
    }

    return (
        <Section
            heading="Transactions"
            subHeading="This is a list of latest transactions."
        >
            {isLoading && (
                <TableSkeleton
                    noOfRows={6}
                    tableConfig={transactionsTableConfig}
                />
            )}
            {!isLoading && (
                <Table
                    data={transactions}
                    aria-label="Transactions Table"
                    tableConfig={transactionsTableConfig}
                />
            )}
        </Section>
    );
};
