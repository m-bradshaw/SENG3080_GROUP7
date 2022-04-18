import React, { createContext, useEffect, useState } from 'react'

export const myContext = createContext({});
export default function Context(props) {
    
    const [userObject, setUserObject] = useState();
    
    useEffect(() => {
        // fetch("http://localhost:3001/api/v1/auth/getUser", {credentials: 'include'})
        fetch("/api/v1/auth/getUser", {credentials: 'include'})
            .then(res => {
                if (res.status !== 200) {
                    console.error("Response status: " + res.status.toString()); 
                }
                else {
                    return res.json();
                }
            }).then(jsonData => {
                if (jsonData) {
                    setUserObject(jsonData); 
                    console.log("Context Success:");
                    console.log(jsonData);
                }
            }).catch((error) => {
                console.log("Context Error:")
                console.log(error); 
            })
    }, [])


    return (        
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
