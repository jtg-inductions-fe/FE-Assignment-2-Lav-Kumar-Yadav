import { IconButton, Paper, Stack, Typography } from '@mui/material';

import type { SectionProps } from './Section.types';

/**
 * **Section Component**
 *
 * A reusable layout wrapper that provides consistent styling and structure for
 * individual sections within a page or dashboard.
 *
 * @param children - The content to render inside the section.
 * @param heading - The main title displayed at the top of the section.
 * @param subHeading - Optional descriptive text displayed below the heading.
 * @param icon - Optional icon element (e.g., info or action icon) displayed next to the heading.
 *
 * @example
 * ```tsx
 * <Section
 *   heading="Sales"
 *   subHeading="A summary of this month's performance"
 *   icon={<InfoOutlined />}
 * >
 *   <SalesChart />
 * </Section>
 * ```
 *
 * @returns  A styled Material UI Paper section containing heading, subheading, and children.
 */
export const Section = ({
    children,
    heading,
    subHeading,
    icon,
    spaceBelowHeading,
}: SectionProps) => (
    <Paper
        elevation={2}
        sx={{
            padding: {
                xs: 4,
                md: 6,
            },
            borderRadius: 4,
            width: '100%',
        }}
        component="section"
        aria-labelledby={heading}
    >
        {(heading || subHeading || icon) && (
            <Stack marginBottom={spaceBelowHeading || 7.5}>
                <Stack direction="row" alignItems="center" gap={2.5}>
                    <Typography variant="h2" id={heading}>
                        {heading}
                    </Typography>
                    {icon && <IconButton>{icon}</IconButton>}
                </Stack>
                <Typography variant="body2" color="textSecondary">
                    {subHeading}
                </Typography>
            </Stack>
        )}
        {children}
    </Paper>
);
