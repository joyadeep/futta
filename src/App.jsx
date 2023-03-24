import Header from './components/Header'
import About from './pages/About'
import Footer from './pages/Footer'
import Landing from './pages/Landing'
import RequestCall from './pages/RequestCall'
import Services from './pages/Services'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VehicleSlider from './pages/VehicleSlider'



function App() {
 
  return (
   <>
   <Header/>
   <Landing/>
   <About/>
   <Services/>
   <VehicleSlider/>
   <RequestCall/>
   <Footer/>




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
