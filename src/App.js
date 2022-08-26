import './App.css';

import { HomepageTop } from './Components/Homepage/HomepageTop';
import { Mid } from './Components/Homepage/Mid';
import { Login } from './Components/Sign&Login/Login';
import { DetailForm } from './Components/Sign&Login/DetailForm';
import { BookingCars } from './Components/Booking Cars/BookingCars';
import { CarDetails } from './Components/Data/CarDetails';
import { Checkout } from './Components/Checkout/Checkout';
import { Payment } from './Components/Payment/Payment';
import Navbar from './Components/Homepage/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/Homepage/HomePage';
import { Card } from './Components/Payment/Card';



function App() {
  return (
   <div>
   
 {/* <DetailForm/> */}
  
  {/* <BookingCars/> */}
  {/* <CarDetails/> */}
  {/* <Checkout/> */}
  {/* <Payment/> */}


  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}>
    
      </Route>
      <Route path="/Detailform" element={<DetailForm/>}/>
      <Route path="/bookingcars" element={<BookingCars/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
     
     
    
  </Routes>
  
   </div>
  );
}

export default App;