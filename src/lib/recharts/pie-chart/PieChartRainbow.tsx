import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Color } from 'react-bootstrap/esm/types';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import TooltipColorful from '../tooltip/TooltipColorful';

const RAINBOW = [
    "#e71d43",
    "#ff0000",
    "#ff3700",
    "#ff6e00",
    "#ffa500",
    "#ffc300",
    "#ffe100",
    "#ffff00",
    "#aad500",
    "#55aa00",
    "#008000",
    "#005555",
    "#002baa",
    "#0000ff",
    "#1900d5",
    "#3200ac",
    "#4b0082",
    "#812ba6",
    "#b857ca",
    "#d03a87",
];

interface PieChartRainbowProps {
    width?: string | number;
    height?: string | number;
    data: any[];
    nameKey: string;
    dataKey: string;
    tooltipBgColor?: Color;
    tooltipTextColor?: Color;
    tooltipIcon: IconProp;
}

const PieChartRainbow: React.FC<PieChartRainbowProps> = ({
    width = "100%",
    height = 250,
    data,
    nameKey,
    dataKey,
    tooltipBgColor = "dark",
    tooltipTextColor = "white",
    tooltipIcon, }) => {
    return (
        <ResponsiveContainer width={width} height={height}>
            <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }} >
                <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" paddingAngle={1} outerRadius={80} fill="#0088FE" label={(entry) => entry.name}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={RAINBOW[index % RAINBOW.length]} />
                    ))}
                </Pie>
                <Tooltip content={
                    <TooltipColorful bgColor={tooltipBgColor} textColor={tooltipTextColor} tooltipIcon={tooltipIcon} />
                } wrapperStyle={{ outline: "none" }} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartRainbow;
