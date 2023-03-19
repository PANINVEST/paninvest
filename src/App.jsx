

import { Home } from './Pages/Home';
import './App.css'
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          
        </Routes>
      </Router>
       
      
      
    </div>
  )
}

export default App
