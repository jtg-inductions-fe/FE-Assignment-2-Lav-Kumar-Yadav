import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router';

import { Menu, NotificationsSharp } from '@mui/icons-material';
import {
    Badge,
    Box,
    Container,
    IconButton,
    Stack,
    useTheme,
} from '@mui/material';

import Logo from '@assets/illustrations/logo.svg';
import { SearchBar, UserProfile } from '@components';
import { useProducts, useUser } from '@hooks';
import type { Product } from '@types';

import { NotificationContainer, StyledAppBar } from './Header.style';
import { buildProfileMenuConfig } from './ProfileMenu.config';

export const Header = () => {
    const { data: products } = useProducts();
    const [searchBarSelectedValue, setSearchBarSelectedValue] = useState<
        Product | undefined
    >();
    const theme = useTheme();
    const { data: user } = useUser();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const profileMenuConfig = buildProfileMenuConfig(theme);

    useEffect(() => {
        if (pathname.startsWith('/products')) {
            const selectedProduct = products.find((product) =>
                pathname.endsWith(product.route),
            );
            setSearchBarSelectedValue(selectedProduct);
        } else {
            setSearchBarSelectedValue(undefined);
        }
    }, [products, pathname]);

    return (
        <>
            <StyledAppBar aria-label="Header">
                <Container maxWidth="xxl">
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <IconButton
                            aria-label="sidebar-toggle"
                            sx={{ display: { md: 'none' } }}
                        >
                            <Menu sx={{ fontSize: theme.spacing(7) }} />
                        </IconButton>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={8}
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                },
                            }}
                        >
                            <Link to="/" aria-label="logo">
                                <Box
                                    component="img"
                                    alt="Logo"
                                    src={Logo}
                                    sx={{
                                        height: theme.spacing(9),
                                        width: theme.spacing(9),
                                    }}
                                />
                            </Link>

                            <SearchBar
                                value={searchBarSelectedValue}
                                options={products}
                                getOptionLabel={(product) => product.name}
                                onChange={(_, product) => {
                                    if (!product) {
                                        void navigate('/');
                                    } else {
                                        void navigate(
                                            `/products/${product.route}`,
                                        );
                                    }
                                }}
                            />
                        </Stack>
                        <Stack direction="row" alignItems="center" gap={3}>
                            <Link to="/notifications" aria-label="notification">
                                <Badge
                                    badgeContent={5}
                                    color="primary"
                                    max={99}
                                >
                                    <NotificationContainer>
                                        <NotificationsSharp
                                            sx={{
                                                fontSize: theme.spacing(6),
                                                color: 'secondary.dark',
                                            }}
                                        />
                                    </NotificationContainer>
                                </Badge>
                            </Link>
                            <UserProfile
                                user={user}
                                menus={profileMenuConfig}
                            />
                        </Stack>
                    </Stack>
                </Container>
            </StyledAppBar>
        </>
    );
};
