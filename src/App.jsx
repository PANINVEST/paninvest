

import { Home } from './Pages/Home';
import './App.css'
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignupPage from "./Pages/Signup.jsx";

function App() {

  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
            <Route path="/signup" element={<SignupPage />} />
          
        </Routes>
      </Router>
       
      
      
    </div>
  )
}

export default App
