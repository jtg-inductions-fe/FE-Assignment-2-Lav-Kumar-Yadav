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
            >
                {products?.map((product, index) => (
                    <StatListItem
                        key={product.id}
                        label={product.name}
                        subLabel={product.framework}
                        divider={index !== products.length - 1}
                        rightContent={
                            <Typography variant="h3" component="p">
                                {product.sales}
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
