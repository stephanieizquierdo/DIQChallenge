import React from "react"
import { Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Styles } from "./Style";

export default function SearchBar({ searchQuery, setSearchQuery, theme }) {
    const style = Styles(theme)
    return (
        <Paper
            component="form"
            sx={style.mainComponent}
            onSubmit={ event => event.preventDefault() }
        >
            <InputBase
                id="Search Users"
                sx={style.inputBase}
                placeholder="Search..."
                value={searchQuery}
                onChange={ (event) => { setSearchQuery(event.target.value)} }
            />
            { searchQuery ? 
                <IconButton type="button" sx={style.iconButton} aria-label="search" onClick={()=>{setSearchQuery("")}}>
                    <HighlightOffIcon sx={style.icon}  />
                </IconButton>
                :
                <IconButton type="button" sx={style.iconButton} aria-label="search">
                    <SearchIcon sx={style.icon} />
                </IconButton>}
        </Paper>
    );
}