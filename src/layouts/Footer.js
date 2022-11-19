import React from "react";
import {Routes, Route} from "react-router-dom"

function Footer ()  {
    return(
    <div>
        <h2>Stopka</h2>
        <Routes>
            <Route path=":id" elemet={
                    <p>dodatkowe info</p>
                }/> 
        </Routes> 
    </div>
    );
}

export default Footer