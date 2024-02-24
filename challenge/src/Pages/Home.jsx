import React from "react"
import { useEffect, useState, useCallback } from "react";
import UserCard from "../Components/UserCard/UserCard";
import getUsers from "../Services/usersService";
import { Container, Grid, CircularProgress} from '@mui/material';
import SearchBar from "../Components/SearchBar/SearchBar";
import { Styles } from "./Styles";

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
        <Container  style={Styles.mainContainer}>
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
                <div>
                    <div style={Styles.searchBarHeader}>
                        <SearchBar></SearchBar>
                    </div>
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
                </div>
                
            }
        </Container>

        );
}

export default(Home)