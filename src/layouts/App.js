import '../styles/App.css';
import {Routes, Route} from "react-router-dom"
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Pages from './Pages';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Routes>
          <Route path="/nn" element={<Header/>} 
        />
        </Routes> */}
        {<Header/>}
      </header>

      <main>
        <aside>
        {/* <Routes>
          <Route path="/" element={<Navigation/>} 
        />
        </Routes> */}
        {<Navigation/>}
        </aside>

        <section className="page">
        {/* <Routes>
          <Route path="/Pages" element={<Pages/>} 
        />
        </Routes> */}
        {<Pages/>}
        </section>
      </main>

      <footer>
      {/* <Routes>
          <Route path="/Footer" element={<Footer/>} 
        />
        </Routes> */}
        {<Footer/>}
      </footer>
    </div>
       
        // {/* <Route path="/" element={<Navigation/>} 
        // />
        // <Route path="/" element={<Pages/>} 
        // />
        // <Route path="/" element={<Header/>} 
        // /> */}

    // {/* <main>
    //   <aside>
    //     <Navigation/> 
    //   </aside>
    //   <section className="pages">
    //     <Pages/>
    //   </section>
    // </main>
    // <footer>
    //   <Footer/>
    //  </footer> */}
    
   
   
  );
}

export default App;
