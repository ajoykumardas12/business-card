import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactButton(props) {
    return ( 
        <button className={props.className}>
            <FontAwesomeIcon icon={props.icon} />
            <div>
                {props.buttonName}
            </div>
        </button>
    );
}

export default ContactButton;