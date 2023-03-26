import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Customer from './pages/Customer'
import {Routes,Route, Outlet} from 'react-router-dom'
import Login from './pages/Login';
import AdminLayout from './layout/AdminLayout';
import Dashbaord from './pages/Dashbaord';
import Driver from './pages/Driver';
import ProtectedRoute from './components/ProtectedRoute';
import TransportQuote from './pages/TransportQuote';


function App() {
 
  return (
   <>
   <Routes>
    <Route path='/' element={<Customer/>} />
    <Route path='/login' element={<Login/>} />
    <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Dashbaord/>} />
      <Route path="/driver" element={<Driver/>} />
      <Route path='/quote' element={<TransportQuote/>} />
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
