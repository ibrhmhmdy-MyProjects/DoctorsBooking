import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return <div className="mx-4 sm:mx-[10%]">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/my-profile' element={<MyProfile />}/>
      <Route path='/doctors' element={<Doctors />}/>
      <Route path='/doctors/:speciality' element={<Doctors />}/>
      <Route path='/my-appointments' element={<MyAppointments />}/>
      <Route path='/appointment/:doctorId' element={<Appointment />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </div>;
};

export default App;
