import React from "react"
import { Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Styles } from "./Style";

export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <Paper
            component="form"
            sx={Styles.mainComponent}
        >
            <InputBase
                sx={Styles.inputBase}
                placeholder="Search..."
                value={searchQuery}
                onChange={ event => setSearchQuery(event.target.value) }
            />
            { searchQuery ? 
                <IconButton type="button" sx={Styles.icon} aria-label="search" onClick={()=>{setSearchQuery("")}}>
                    <HighlightOffIcon />
                </IconButton>
                :
                <IconButton type="button" sx={Styles.icon} aria-label="search">
                    <SearchIcon />
                </IconButton>}
        </Paper>
    );
}