import {assets} from "../assets/assets";

const Header = () => {
  return <div className="flex flex-col md:flex-row flex-wrap rounded-lg bg-primary px-6 md:px-10 lg:px-20">
    {/* ---------- Left Side ------------ */}
    <div className="md:w-1/2 flex flex-col justify-center items-start gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
      <p className="text-3xl md:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment <br />With Trusted Doctors </p>
      <div className="flex flex-col md:flex-row items-center gap-3 text-xs text-white font-light">
        <img className="w-28" src={assets.group_profiles} alt="" />
        <p className="">Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block"/> schedule your appointment hassle-free.
        </p>
      </div>
      <a href="/#speciality" className="flex items-center gap-2 bg-white text-sm text-gray-600 rounded-full py-3 px-8 m-auto md:m-0 hover:scale-105 transition-all duration-300">
      Book Appointment
      <img className="w-3" src={assets.arrow_icon} alt="" />
      </a>
    </div>
    {/* ---------- Right Side ------------ */}
    <div className="md:w-1/2 relative">
      <img className="md:absolute bottom-0 w-full h-auto rounded-lg" src={assets.header_img} alt="" />
    </div>
  </div>;
};

export default Header;
