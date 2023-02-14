import React from "react";
import Social from "./Social";
import { faTwitter, faFacebookF, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return (<footer className="footer">
        <Social
            icon={faTwitter}
        />
        <Social 
            icon = {faFacebookF}
        />
        <Social 
            icon = {faInstagram}
        />
        <Social 
            icon = {faGithub}
        />
    </footer>)
}

export default Footer;