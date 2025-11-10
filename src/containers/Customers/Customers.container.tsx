import { Box, List, Typography } from '@mui/material';

import { Section, StatListItem, StatListItemSkeleton } from '@components';
import { useCustomers } from '@hooks';

/**
 * A utility function to format currency
 * @param amount to be format
 * @returns a formatted currency in dollar
 */
const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(amount);

/**
 * This component is used to represent th list of customers
 * @returns List of Customers
 */
export const Customers = () => {
    const { data: customers, isLoading, error } = useCustomers();

    if (error) {
        throw new Error(error);
    }

    return (
        <Section heading="Latest Customers">
            <List
                sx={{
                    height: {
                        xs: 425,
                        xxl: 438,
                    },
                    overflowY: 'auto',
                }}
                disablePadding
                aria-label="List of Latest Customers"
            >
                {isLoading && (
                    <Box
                        aria-live="polite"
                        aria-busy={true}
                        aria-label="Loading customers data"
                    >
                        {Array.from({ length: 6 }).map((_, index) => (
                            <StatListItemSkeleton key={index} />
                        ))}
                    </Box>
                )}
                {!isLoading &&
                    customers?.map((customer, index) => (
                        <StatListItem
                            key={index}
                            label={`${customer.name.title} ${customer.name.first} ${customer.name.last}`}
                            subLabel={customer.email}
                            imageSrc={customer.picture.thumbnail}
                            divider={index !== customers.length - 1}
                            disableGutters
                            rightContent={
                                <Typography variant="h3" component="p">
                                    {formatCurrency(customer.sale)}
                                </Typography>
                            }
                        />
                    ))}
                {!isLoading && customers?.length === 0 && (
                    <Typography variant="body2" textAlign="center" padding={4}>
                        No Customers available
                    </Typography>
                )}
            </List>
        </Section>
    );
};
