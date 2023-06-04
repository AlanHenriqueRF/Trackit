import { createContext, useState } from "react";

export const HabitosContext = createContext({});

export const HabitosProvider = ({children}) =>{
    const [habitoday,setHabitoday] = useState([]);

    return (
        <HabitosContext value={{habitoday,setHabitoday}}>
            {children}
        </HabitosContext>
    )
}

