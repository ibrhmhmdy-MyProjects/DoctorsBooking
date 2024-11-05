import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {AppContext} from "../context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const {speciality} = useParams();
  const {doctors} = useContext(AppContext);
  const [filterDoctors,setFilterDoctors] = useState([]);
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoctors(doctors.filter(doc => doc.speciality === speciality));
    }else{
      setFilterDoctors(doctors);
    }
  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality]);

  return <div>
    <p>Browse through the doctors specialist.</p>
    <div>
      <div>
        <p>General physician</p>
        <p>Gynecologist</p>
        <p>Dermatologist</p>
        <p>Pediatricians</p>
        <p>Neurologist</p>
        <p>Gastroenterologist</p>
      </div>
      <div>
        {
          filterDoctors?.map((doctor,index)=>(
            <div onClick={() => navigate(`/appointment/${doctor._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
              <img src={doctor.image} alt="" className="bg-blue-50"/>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span><span className="font-medium">Available</span>
                </div>
                <p className="font-medium text-gray-900 text-lg">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>;
};

export default Doctors;
