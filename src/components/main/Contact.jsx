import React from "react";
import ContactButton from "./ContactButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div>
            <ContactButton 
                className="email" 
                buttonName="Email"
                icon={faEnvelope}
            />
            <ContactButton 
                className="linkedIn" 
                buttonName="LinkedIn"
                icon={faLinkedin}
            />
        </div>
    );
}

export default Contact;