import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
  <div className="flex bg-primary rounded-lg px-6 h-60 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
    <div className="flex-1 py-8 sm:py-10 md:py-10 lg:py-12 lg:pl-5">
      <div className="text-sm md:text-lg lg:text-4xl font-semibold text-white">
        <p >Book Appointment </p>
        <p className="mt-4">With 100+ Trusted Doctors</p>
      </div>
      <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="mt-4 bg-white px-8 py-3 text-sm sm:text-base rounded-full hover:scale-105 transition-all">Create Account</button>
    </div>
    <div className="hidden lg:block md:w-[270px] lg:w-[370px]  relative">
      <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.appointment_img} alt="" />
    </div>
  </div>);
};

export default Banner;
