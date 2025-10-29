import { useMemo } from 'react';

import { useNavigate, useParams } from 'react-router';

import { Menu as MenuIcon, NotificationsSharp } from '@mui/icons-material';
import {
    Avatar,
    Badge,
    Box,
    Container,
    IconButton,
    Stack,
    useTheme,
} from '@mui/material';

import Logo from '@assets/illustrations/logo.svg';
import { Link, Menu, SearchBar, type SearchBarProps } from '@components';
import type { Product } from '@types';

import { StyledAppBar, StyledNotificationWrapper } from './Header.style';
import type { HeaderProps } from './Header.types';
import { BuildProfileMenuConfig } from './UserProfile.config';

/**
 * Header component displaying the main navigation bar.
 * Renders a header with a logo, search functionality, notification badge,
 * and user profile icon.
 */
export const Header = ({ user, products }: HeaderProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const params = useParams() as { productId?: string };

    const SearchBarOnChangeHandler: SearchBarProps<Product>['onChange'] = (
        _,
        product,
    ) => {
        void navigate(product ? `/products/${product.id}` : '/');
    };

    const productsIdMap = useMemo(
        () =>
            products.reduce(
                (acc, currentProduct) => ({
                    ...acc,
                    [currentProduct.id]: currentProduct,
                }),
                {} as Record<string, Product | undefined>,
            ),
        [products],
    );

    const profileMenuConfig = BuildProfileMenuConfig(user);

    return (
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
                        <MenuIcon
                            sx={{
                                fontSize: 28,
                                color: theme.palette.text.primary,
                            }}
                        />
                    </IconButton>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={8}
                        display={{ xs: 'none', md: 'flex' }}
                    >
                        <Link
                            to="/"
                            aria-label="logo"
                            display="flex"
                            alignItems="center"
                        >
                            <Box
                                component="img"
                                alt="Logo"
                                src={Logo}
                                height={36}
                                width={36}
                            />
                        </Link>
                        <Box width={402}>
                            <SearchBar
                                value={productsIdMap[params.productId ?? '']}
                                options={products}
                                getOptionLabel={(product) => product.name}
                                onChange={SearchBarOnChangeHandler}
                            />
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={3}>
                        <Link to="/notifications" aria-label="notification">
                            <Badge
                                badgeContent={5}
                                color="primary"
                                max={99}
                                aria-label="notification count"
                            >
                                <StyledNotificationWrapper>
                                    <NotificationsSharp
                                        sx={{
                                            fontSize:
                                                theme.typography.pxToRem(24),
                                            color: 'secondary.dark',
                                        }}
                                        aria-hidden="true"
                                    />
                                </StyledNotificationWrapper>
                            </Badge>
                        </Link>
                        <Menu
                            config={profileMenuConfig}
                            iconAriaLabel="profile"
                            menuAriaLabel="profile-menu"
                        >
                            <Avatar
                                src={user?.picture.thumbnail}
                                alt={user?.name.first}
                                sx={{
                                    height: 32,
                                    width: 32,
                                }}
                            />
                        </Menu>
                    </Stack>
                </Stack>
            </Container>
        </StyledAppBar>
    );
};
