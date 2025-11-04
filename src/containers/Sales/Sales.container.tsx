import { format, parseISO } from 'date-fns';

import { InfoOutlined } from '@mui/icons-material';

import { LineChart, Section } from '@components';
import { useSales } from '@hooks';

/**
 * Sales Container
 *
 * A wrapper component that renders a `LineChart` displaying sales data over time.
 * It retrieves sales data using the `useSales` hook and formats both axis labels
 * and tooltip content for improved readability.
 */
export const Sales = () => {
    const { data: sales } = useSales();

    return (
        <Section
            heading="Sales"
            icon={<InfoOutlined />}
            aria-labelledby="Sales"
        >
            <div id="Sales" aria-label="Line Chart for Sales data">
                <LineChart
                    data={sales}
                    heading="Sales"
                    xKey="date"
                    yKey="sales"
                    xTickFormatter={(val) =>
                        format(parseISO(String(val)), 'dd MMM')
                    }
                    yTickFormatter={(val) => `${Number(val) / 1000}k`}
                    toolTipLabelFormatter={(val) =>
                        format(parseISO(String(val)), 'd MMM, yyyy')
                    }
                    toolTipValueFormatter={(value) =>
                        `$${Number(value) / 1000}k`
                    }
                />
            </div>
        </Section>
    );
};
