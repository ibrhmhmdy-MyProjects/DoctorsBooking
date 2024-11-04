import { useNavigate } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import {DoctorsMenu} from "../data/DoctorsMenu";

const TopDoctors = () => {
  const navigate = useNavigate();
  // const {doctorsMenu} = useContext(AppContext);

  return <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <SectionHeader title="Top Doctors to Book" subTitle="Simply browse through our extensive list of trusted doctors."/>
    <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
      {DoctorsMenu.slice(0,10).map((item,index)=>(
        <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img src={item.image} alt="" className="bg-blue-50"/>
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span><span className="font-medium">Available</span>
            </div>
            <p className="font-medium text-gray-900 text-lg">{item.name}</p>
            <p className="text-sm text-gray-600">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-50 px-12 py-3 rounded-full mt-10 hover:font-medium">More</button>
  </div>;
};

export default TopDoctors;
