import { Box, Typography } from '@mui/material';

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
                <Box
                    aria-live="polite"
                    aria-busy={true}
                    aria-label="Loading transactions data"
                >
                    <TableSkeleton
                        noOfRows={6}
                        tableConfig={transactionsTableConfig}
                    />
                </Box>
            )}
            {!isLoading && transactions && (
                <Table
                    data={transactions}
                    tableConfig={transactionsTableConfig}
                />
            )}
            {!isLoading && transactions.length === 0 && (
                <Typography variant="body2" textAlign="center" padding={4}>
                    No Transactions data available
                </Typography>
            )}
        </Section>
    );
};
