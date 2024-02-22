import React from "react"
import { useEffect, useState, useCallback } from "react";
import UserCard from "../Components/UserCard";
import getUsers from "../Services/usersService";

const Home = () => {
    const [users, setUsers] = useState([]);

    const fetchData = useCallback(async()=> {
        const data = await getUsers();
        setUsers(data)
    }, [])
    
    useEffect(() => {
        fetchData()
    }, [fetchData]);
    
    return (
        <div>
            {console.log(users)}
                <h2 style={{textAlign:"center"}}> Users </h2>
                <div style={{display:"flex", justifyContent:"space-around", margin:"auto"}}>
                        {users?.map( (usuario, index) => {
                                return(<UserCard key={index} user={usuario}/>);
                            })
                        }
                </div>
                
            </div>
        );
}

export default(Home)