import React from "react"
import {Routes, Route, redirect} from "react-router-dom"

const  permission = true;

function AdminPages () {
    return(
        <Routes>
            <Route element={() => (
                permission? <h3>Panel admina! </h3> : redirect("/login")
            )}/>
        </Routes>
    );
}


export default AdminPages