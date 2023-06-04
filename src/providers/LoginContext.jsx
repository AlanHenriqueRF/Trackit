import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = (props) => {
    const [user,setUser] = useState({})
    const [habitoday,setHabitoday] = useState([]);

    return (
        <LoginContext.Provider value={{ user,setUser ,habitoday,setHabitoday }}>
            {props.children}
        </LoginContext.Provider>
    );
};
