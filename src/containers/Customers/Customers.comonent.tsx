import { List, Typography } from '@mui/material';

import { Section, StatListItem } from '@components';
import { useCustomers } from '@hooks';

/**
 * This component is used to represent th list of customers
 * @returns List of Customers
 */
export const Customers = () => {
    const { data: customers } = useCustomers();

    return (
        <Section heading="Latest Customers" spaceBelowHeading={4}>
            <List
                sx={{
                    maxHeight: 460,
                    overflowY: 'auto',
                }}
                disablePadding
            >
                {customers?.map((customer, index) => (
                    <StatListItem
                        key={index}
                        label={`${customer.name.title} ${customer.name.first} ${customer.name.last}`}
                        subLabel={customer.email}
                        imageSrc={customer.picture.thumbnail}
                        divider={index !== customers.length - 1}
                        disableGutters
                        rightContent={
                            <Typography variant="h3" component="p">
                                ${customer.sale}
                            </Typography>
                        }
                    />
                ))}
            </List>
        </Section>
    );
};
