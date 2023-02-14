import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Social(props) {
    return (
        <div
            className="social"
        >
        <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default Social;