import { Header as HeaderComponent } from '@components';
import { useProducts, useUser } from '@hooks';

export const Header = () => {
    const { data: user } = useUser();
    const { data: products } = useProducts();

    return <HeaderComponent products={products} user={user} />;
};
