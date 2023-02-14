import React from "react";

import avatarImage from "../../assets/images/image.png";
import "./Avatar.css";

function Avatar(){
    return (
        <img src={avatarImage} alt="avatar" className="avatarImg"/>
    )
}

export default Avatar;