import React from "react";
import InfoPart from "./InfoPart";

function Info() {
    return (
        <div className="info">
            <InfoPart
                title="About"
                content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
            />
            <InfoPart
                title="Interests"
                content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
            />
        </div>
    );
}

export default Info;