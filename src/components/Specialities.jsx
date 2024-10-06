import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import {SpecialitiesMenu} from "../Data/SpecialitiesMenu";
const Specialities = () => {
  return <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
    <SectionHeader title="Find by Speciality " subTitle="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."/>
    <div className="my-6 flex items-center sm:justify-center gap-4 pt-5 w-full overflow-scroll">
    {SpecialitiesMenu.map((item,index)=>(
      <Link className="flex flex-col items-center text-start cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
          <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
          <p>{item.speciality}</p>
      </Link>
    ))}
    </div>
  </div>;
};

export default Specialities;
