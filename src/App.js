
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import CustomerLogin from './components/customerlogin';
import ServiceLogin from './components/serviceproviderlogin';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
     

      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customerlogin" element={<CustomerLogin/>} />
      <Route path="/serviceproviderlogin" element={<ServiceLogin/>} />
      {/* <Route path="/about" element={<About />} /> */}
      
    
    </Routes>
    </>
      

    
  );
}

export default App;
