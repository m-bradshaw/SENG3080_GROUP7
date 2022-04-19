import React, { createContext, useEffect, useState } from 'react'
import GetData from './HandleData';

export const myContext = createContext({});
export default function Context(props) {
    //  dataSource="/api/v1/auth/getUser"
    const [dataSource, setDataSource] = useState("/api/v1/auth/getUser");
    const [userObject, setUserObject] = useState();

    useEffect(() => {
        const requestInit = {credentials: 'include'};
        var dataHandlerMethod = setUserObject;
        
        GetData(dataSource, dataHandlerMethod, requestInit);

    }, [dataSource]);
    
    return (        
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
