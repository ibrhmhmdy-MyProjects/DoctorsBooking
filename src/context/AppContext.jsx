import { createContext } from "react";
import {doctors} from "../assets/data/doctors";

export const AppContext = createContext();

const AppContextProvider = (props)=>{
  console.log(doctors);
  
  const value = {doctors}
  return (
    <AppContext.Provider value={value}>
       {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider;