import React from 'react';
import {BrowserRouter as Routes, Route , Switch} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Founders from './Components/Founders';
import Ideas from './Components/Ideas';
import Startups from './Components/Startups';



const App = () => {
  return (
    
    <div>

      <Switch>

        <Route exact path='/'>

         <NavBar />
         <Home />
         <Footer />

        </Route>

        <Route exact path='/Founders'>
          <Founders />
        </Route>
        <Route exact path='/Ideas'>
          <Ideas />
        </Route>
        <Route exact path='/Startup'>
          <Startups />
        </Route>


      </Switch>
    </div>
  )
}

export default App
