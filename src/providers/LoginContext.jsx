import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = (props) => {
    const [user,setUser] = useState({})
    const [habitoday,setHabitoday] = useState([]);
    const [percent, setPercent] = useState([])

    return (
        <LoginContext.Provider value={{ user,setUser ,habitoday,setHabitoday, percent, setPercent }}>
            {props.children}
        </LoginContext.Provider>
    );
};
