import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Customer from './pages/Customer'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashbaord from './pages/Dashbaord';
import Driver from './pages/Driver';
import ProtectedRoute from './components/ProtectedRoute';
import TransportQuote from './pages/TransportQuote';
import RequestCallDash from './pages/RequestCallDash';
import Reservation from './pages/Reservation';


function App() {
 
  return (
   <>
   <Routes>
    <Route path='/' element={<Customer/>} />
    <Route path='/login' element={<Login/>} />
    <Route element={<ProtectedRoute/>}>
      <Route path="/reservation" element={<Reservation/>} />
      <Route path="/dashboard" element={<Dashbaord/>} />
      <Route path="/requestcall" element={<RequestCallDash/>} />
      <Route path='/quote' element={<TransportQuote/>} />
      <Route path='/driver' element={<Driver/>} />
    </Route>
   </Routes>
   <ToastContainer
   position="top-right"
   autoClose={3000}
   hideProgressBar={true}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   draggable
   theme="colored"
   />
   </>
  )
}

export default App
