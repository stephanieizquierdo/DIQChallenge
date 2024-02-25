import React from "react"
import { useEffect, useState, useCallback, useContext } from "react";
import UserCard from "../Components/UserCard/UserCard";
import getUsers from "../Services/usersService";
import { Container, Grid, CircularProgress} from '@mui/material';
import SearchBar from "../Components/SearchBar/SearchBar";
import { Styles } from "./Styles";
import { filterUsers } from "../Presenters/SearchBarPresenter/SearchBarPresenter";
import NoResults from "../Components/SearchBar/NoResults";
import { DarkModeContext } from "../Providers/DarkModeProvider";
import DarkModeSwitcher from "../Components/DarkModeSwitcher/DarkModeSwitcher";

const Home = () => {
    const {darkMode} = useContext(DarkModeContext);
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    
    const [filteredUsers, setfilteredUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const styles = Styles(darkMode)

    const fetchData = useCallback(async()=> {
        const data = await getUsers();
        setUsers(data)
        setfilteredUsers(data)
        setLoading(false)
    }, [])
    
    useEffect(() => {
        fetchData()
    }, [fetchData]);

    useEffect(() =>{
        if(!searchQuery) { setfilteredUsers(users); return }
        setfilteredUsers(filterUsers(users, searchQuery))
    }, [searchQuery, users])

    return (
        <Container style={styles.mainContainer}>
            {isLoading?
                <CircularProgress 
                    style={styles.circularProgress}
                />
                :
                <div>
                    <div style={styles.searchBarHeader}>
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={darkMode} />
                    </div>
                    {filteredUsers.length?
                        <Grid
                            container
                            spacing={5}
                            style={styles.gridCards}
                        >
                            {filteredUsers.map((usuario, index) => (
                                <Grid item key={index}>
                                    <UserCard key={index} user={usuario} theme={darkMode}/>
                                </Grid>
                                ))
                            }
                        </Grid>
                        :
                        <NoResults theme={darkMode}/>
                    }
                </div>
            }
            <div style={{ position:"fixed", bottom:0, right:0}}>
                <DarkModeSwitcher/>

            </div>
        </Container>

        );
}

export default(Home)