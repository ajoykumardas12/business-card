import React from "react";
import Header from "./main/Header";
import Avatar from "./main/Avatar";
import Contact from "./main/Contact";
import Info from "./main/Info";

import "./Main.css";

function Main(){
    return (
    <main>
        <Avatar />
        <Header />
        <Contact />
        <Info />
    </main>
    )
}

export default Main;