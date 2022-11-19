import React from "react";
import {NavLink} from "react-router-dom"
import header1 from "../imagines/header1.jpg"
import header2 from "../imagines/header2.jpg"
import header3 from "../imagines/header3.jpg"
import "../styles/Header.css"
import {Routes, Route} from "react-router-dom"



function Header ()  {
    // const images = [header1, header2, header3];

    // const img = images[Math.floor(Math.random()*3)]

    return(
    <Routes>
         <Route path="/start" element={ <img src={header1} alt="miasto" width="500" heisgt="333" />
         } />
        <Route path="/contact" element={ <img src={header2} alt="miasto" width="500" heisgt="333"/>
         } />
          <Route path="/products" element={ <img src={header1} alt="miasto" width="500" heisgt="333"/>
         } />
          <Route path="/admin" element={ <img src={header3} alt="miasto" width="500" heisgt="333"/>
         } />
         <Route path="*" element={ <img src={header3} alt="miasto" width="500" heisgt="333"/>
         } />

         {/* <Route path="/start" element={ <img src={img} alt="miasto" width="500" heisgt="333"/>
         } /> 

        <Route path="/products" element={ <img src={img} alt="miasto" width="500" heisgt="333"/>
         } />  */}

    </Routes>
    );
}

export default Header

// export default function Header() {
//     return <h1>Header</h1>
// }