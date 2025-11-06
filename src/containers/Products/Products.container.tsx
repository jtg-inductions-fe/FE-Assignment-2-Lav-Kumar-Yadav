import { List, Typography } from '@mui/material';

import { Section, StatListItem } from '@components';
import { useProducts } from '@hooks';

/**
 * This container is used to represent the Products list
 * @returns List of Products
 */
export const Products = () => {
    const { data: products } = useProducts();

    return (
        <Section heading="Top products">
            <List
                sx={{
                    maxHeight: 460,
                    overflowY: 'auto',
                }}
                disablePadding
                aria-label="List of Top Products"
            >
                {products?.map((product, index) => (
                    <StatListItem
                        key={product.id}
                        label={product.name}
                        subLabel={product.framework}
                        divider={index !== products.length - 1}
                        disableGutters
                        rightContent={
                            <Typography variant="h3" component="p">
                                {new Intl.NumberFormat('en-US').format(
                                    product.sales,
                                )}
                                <Typography
                                    variant="body1"
                                    component="span"
                                    color="textDisabled"
                                    marginLeft={1}
                                >
                                    sales
                                </Typography>
                            </Typography>
                        }
                    />
                ))}
            </List>
        </Section>
    );
};
