import React from "react";
import "./Header.css";

function Header(){
    return (<header className="header">
        <h2 className="name">Laura Smith</h2>
        <h5 className="profession">Frontend Developer</h5>
        <p className="website"><a href="./">laurasmith.website</a></p>
    </header>)
}

export default Header;