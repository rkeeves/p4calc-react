import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Color } from 'react-bootstrap/esm/types';
import { TooltipProps } from 'recharts';

interface TooltipColorfulProps extends TooltipProps<number, string> {
    bgColor: Color;
    textColor: Color;
    tooltipIcon: IconProp;
}

const TooltipColorful: React.FC<TooltipColorfulProps> = ({
    bgColor,
    textColor,
    tooltipIcon,
    active,
    payload,
    label }) => {
    return (
        <>
            {active && <div className={`bg-${bgColor} rounded p-2`}>
                <div className="text-white fw-bold">{label}</div>
                <div
                    className={`text-${textColor}`}
                >{payload?.[0].value?.toLocaleString()}<span className="ms-1"><FontAwesomeIcon icon={tooltipIcon} /></span></div>
            </div>}
        </>);
}

export default TooltipColorful;
