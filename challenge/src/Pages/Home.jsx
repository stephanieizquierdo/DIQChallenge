import React from "react"
import { useEffect, useState, useCallback } from "react";
import UserCard from "../Components/UserCard/UserCard";
import getUsers from "../Services/usersService";
import { Container, Grid, CircularProgress} from '@mui/material';
import SearchBar from "../Components/SearchBar/SearchBar";
import { Styles } from "./Styles";
import { filterUsers } from "../Presenters/SearchBarPresenter/SearchBarPresenter";
import NoResults from "../Components/SearchBar/NoResults";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    
    const [filteredUsers, setfilteredUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = useCallback(async()=> {
        const data = await getUsers();
        setUsers(data)
        setfilteredUsers(data)
    }, [])
    
    useEffect(() => {
        fetchData()
        setLoading(false)
    }, [fetchData]);

    useEffect(() =>{
        if(!searchQuery) { setfilteredUsers(users); return }
        setfilteredUsers(filterUsers(users, searchQuery))
    }, [searchQuery, users])

    return (
        <Container style={Styles.mainContainer}>
            {isLoading?
                <CircularProgress 
                    style={Styles.circularProgress}
                />
                :
                <div>
                    <div style={Styles.searchBarHeader}>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    </div>
                    {filteredUsers.length?
                        <Grid
                            container
                            spacing={5}
                            style={Styles.gridCards}
                        >
                            {filteredUsers.map((usuario, index) => (
                                <Grid item key={index}>
                                    <UserCard key={index} user={usuario}/>
                                </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <NoResults/>
                    }
                </div>
                
            }
        </Container>

        );
}

export default(Home)