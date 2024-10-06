import { NavLink, useNavigate } from "react-router-dom";
import {assets} from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);
  return (
    <div className="flex justify-between items-center mb-5 py-4 text-sm border-b border-b-gray-400">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer"/>
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to='/'>
          <li className="py-1">Home</li>
          <hr  className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden"/>
        </NavLink>
        <NavLink to='/doctors'>
          <li className="py-1">Doctors</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden"/>
        </NavLink>
        <NavLink to='/contact'>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden"/>
        </NavLink>
        <NavLink to='/about'>
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-primary hidden"/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
            {/* <img src={assets.dropdown_icon} alt="" className="w-2.5"/> */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="flex flex-col rounded gap-4 p-4 min-w-48 bg-stone-100">
                <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=>navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
          : <div className="flex items-center gap-4">
            <button onClick={()=>navigate('/register')} className="bg-primary py-2 px-4 rounded-full text-white font-medium hidden md:block">
              Create Account
            </button>
            <button onClick={()=>setToken(true)} className="bg-primary py-2 px-4 rounded-full text-white font-medium hidden md:block">
              Login
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
