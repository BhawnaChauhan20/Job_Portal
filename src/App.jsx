import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
function App() {


  return (
    <>
    <Router>
      <div className="bg-hero-pattern bg-cover bg-center h-full min-h-screen bg-no-repeat w-full">
        <Navbar /> {/* Navbar will be visible on all pages */}
        <Routes>
          {/* Main section */}
          <Route path="/" element={<Section />} />
          {/* Login page */}
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
