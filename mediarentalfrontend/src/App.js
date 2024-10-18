import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer';

import 'react-toastify/dist/ReactToastify.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import UserBasePage from './Pages/User/UserBasePage';
import UserHome from './Pages/User/UserHome';
import AdminBase from './Pages/Admin/AdminBase';
import AdminHome from './Pages/Admin/AdminHome';
import AdminDashboard from './Pages/Admin/AdminDashboard';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>



        {/* user Specific Route */}
        <Route path="/user" element={<UserBasePage />}>
          <Route path="home" element={<UserHome/>} />
         
        </Route>

        {/* admin Specific Route */}
        <Route path="/admin" element={<AdminBase />}>
          <Route path="home" element={<AdminHome/>} />
         
        </Route>


      

      </Routes>
      <Footer />
    </>
  );
}

export default App;
