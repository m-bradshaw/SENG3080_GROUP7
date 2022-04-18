import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext({});
export default function Context(props) {
    
    const [userObject, setUserObject] = useState();
    
    useEffect(() => {
        fetch("http://localhost:3001/api/v1/auth/getUser", {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                if(data) {
                    setUserObject(data);
                }
            })
    }, [])


    return (        
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}