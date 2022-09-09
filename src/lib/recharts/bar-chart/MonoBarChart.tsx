import { Color } from 'react-bootstrap/esm/types';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import TooltipColorful from '../tooltip/TooltipColorful';
import { hexColor } from '../../bootstrap'
import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface MonoBarChartProps<T> {
    width?: string | number;
    height?: string | number;
    data: T[];
    nameKey: Extract<keyof T, string>;
    dataKey: Extract<keyof T, string>;
    xTickColor?: Color;
    yAxisWidth?: number;
    yTickColor?: Color;
    barColor?: Color;
    barSize?: number;
    tooltipBgColor?: Color;
    tooltipTextColor?: Color;
    tooltipIcon: IconProp;
}

const MonoBarChart = <T extends object>({
    width = "90%",
    height = 600,
    data,
    nameKey,
    dataKey,
    xTickColor = "muted",
    yAxisWidth = 100,
    yTickColor = "muted",
    barColor = "primary",
    barSize = 5,
    tooltipBgColor = "dark",
    tooltipTextColor = "white",
    tooltipIcon
}: MonoBarChartProps<T> & { children?: ReactNode }) => {
    return (
        <ResponsiveContainer width={width} height={height}>
            <BarChart data={data} layout="vertical" barGap={2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fill: hexColor(xTickColor) }} />
                <YAxis dataKey={nameKey} type="category" width={yAxisWidth} tick={{ fill: hexColor(yTickColor) }} />
                <Tooltip content={
                    <TooltipColorful bgColor={tooltipBgColor} textColor={tooltipTextColor} tooltipIcon={tooltipIcon} />
                } wrapperStyle={{ outline: "none" }} />
                <Bar dataKey={dataKey} fill={hexColor(barColor)} barSize={barSize} />
            </BarChart>
        </ResponsiveContainer>);
}

export default MonoBarChart;
