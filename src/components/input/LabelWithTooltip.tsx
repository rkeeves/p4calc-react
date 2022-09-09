import React from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

interface LabelWithTooltipProps {
    labelText: string;
    tooltipText: string;
}

const LabelWithTooltip: React.FC<LabelWithTooltipProps> = ({ labelText, tooltipText }) => {
    return (
        <OverlayTrigger placement="top"
            overlay={
                <Tooltip>
                    {tooltipText}
                </Tooltip>
            }>
            <Form.Label>
                <span>{labelText}</span>
                <span className="ms-2"><FontAwesomeIcon icon={faCircleQuestion} /></span>
            </Form.Label>
        </OverlayTrigger>);
}

export default LabelWithTooltip;
