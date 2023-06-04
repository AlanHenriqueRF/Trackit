import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = (props) => {
    const [user,setUser] = useState({id: '',
    name: "",
    image: "",
    email: "",
    password: "",
    token: ""})

    return (
        <LoginContext.Provider value={{ user,setUser  }}>
            {props.children}
        </LoginContext.Provider>
    );
};
