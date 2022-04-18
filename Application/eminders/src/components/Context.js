import React, { createContext, useEffect, useState } from 'react'
import GetData from './HandleData';

export const myContext = createContext({});
export default function Context(props) {
    
    const [userObject, setUserObject] = useState();

    useEffect(() => {
        var dataSource = "/api/v1/auth/getUser";
        var requestInit = {credentials: 'include'};
        var dataHandlerMethod = setUserObject;
        return GetData(dataSource, dataHandlerMethod, requestInit);
    }, []);
    
    return (        
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
