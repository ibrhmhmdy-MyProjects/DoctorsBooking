import { createContext } from "react";
import {DoctorsMenu} from "../data/DoctorsMenu";

export const AppContext = createContext();

const AppContextProvider = (props)=>{
  console.log(DoctorsMenu);
  const value = {DoctorsMenu}
  return (
    <AppContext.Provider value={value}>
       {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider;