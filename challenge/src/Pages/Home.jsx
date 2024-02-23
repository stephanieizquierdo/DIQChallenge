import React from "react"
import { useEffect, useState, useCallback } from "react";
import UserCard from "../Components/UserCard/UserCard";
import getUsers from "../Services/usersService";
import { Container, Grid, CircularProgress} from '@mui/material';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const fetchData = useCallback(async()=> {
        const data = await getUsers();
        setUsers(data)
    }, [])
    
    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [fetchData]);

    return (
        <Container style={{margin: "5%"}}>
            <h2 style={{textAlign:"center"}}> Users </h2>

            {isLoading?
                <CircularProgress 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        margin: 'auto',
                        width: '10vw'
                    }}
                />
                :
                <Grid
                    container
                    spacing={5}
                    style={{justifyContent: "center"}}
                >
                {users?.map( (usuario, index) => {
                        return(
                            <Grid item key={index}>
                                <UserCard key={index} user={usuario}/>
                            </Grid>
                        );
                    })
                }
                </Grid>
            }
        </Container>

        );
}

export default(Home)