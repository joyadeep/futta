import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Customer from './pages/Customer'
import {Routes,Route, Outlet} from 'react-router-dom'
import Login from './pages/Login';
import AdminLayout from './layout/AdminLayout';
import Dashbaord from './pages/Dashbaord';
import Driver from './pages/Driver';


function App() {
 
  return (
   <>
   <Routes>
    <Route path='/' element={<Customer/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<AdminLayout/>}>
      <Route path="/dashboard" element={<Dashbaord/>} />
      <Route path="/driver" element={<Driver/>} />
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
