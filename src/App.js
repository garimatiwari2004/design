import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import CustomerLogin from './components/customerlogin';
import ServiceLogin from './components/serviceproviderlogin';
import Success from './components/success';
import AllServices from './components/allservices';
import Payments from './components/payments';   // ✅ Payments page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/serviceproviderlogin" element={<ServiceLogin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/allservices" element={<AllServices />} />
        <Route path="/payments" element={<Payments />} />  {/* ✅ New route */}
      </Routes>
    </>
  );
}

export default App;
