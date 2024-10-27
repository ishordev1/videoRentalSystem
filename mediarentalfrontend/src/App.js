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
import UserMedia from './Pages/User/Media';
import UserGame from './Pages/User/Game';


import AdminBase from './Pages/Admin/AdminBase';
import AdminHome from './Pages/Admin/AdminHome';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import About from './Pages/Admin/About';
import Contact from './Pages/Admin/Contact';
import Media from './Pages/Admin/Media';
import Game from './Pages/Admin/Game';
import User from './Pages/Admin/User';
import AddMedia from './Pages/Admin/AddMedia';
import AddGame from './Pages/Admin/AddGame';
import AddUser from './Pages/Admin/AddUser';
import BookMedia from './Pages/User/BookMedia';
import BookGame from './Pages/User/BookGame';
import Dashboard from './Pages/User/Dashboard';
import ShowRentalMedia from './Pages/User/ShowRentalMedia';
import ShowRentalGame from './Pages/User/ShowRentalGame';
import ShowSingleMedia from './Pages/User/ShowSingleMedia';


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
          <Route path="media" element={<UserMedia/>} />
          <Route path="game" element={<UserGame/>} />
          <Route path="dashboard" element={<Dashboard/>} >
          <Route path="showrentalmedia" element={<ShowRentalMedia/>} />
          <Route path="showrentalgame" element={<ShowRentalGame/>} />
          <Route path="showrentalmedia/showmedia/:mediaId" element={<ShowSingleMedia/>} />

          </Route>
          <Route path="bookgame/:gameId" element={<BookGame />} />
          <Route path="bookmedia/:mediaId" element={<BookMedia/>} />
        
         
        </Route>

        {/* admin Specific Route */}
        <Route path="/admin" element={<AdminBase />}>
        <Route path="home" element={<AdminHome />}> 
            <Route path="dashboard" element={<AdminDashboard />} /> 
            <Route path="media" element={<Media />} /> 
            <Route path="game" element={<Game />} /> 
            <Route path="user" element={<User />} /> 
            <Route path="media/addmedia" element={<AddMedia />} /> 
            <Route path="game/addgame" element={<AddGame />} /> 
            <Route path="user/adduser" element={<AddUser />} /> 


          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>


      

      </Routes>
      <Footer />
    </>
  );
}

export default App;
