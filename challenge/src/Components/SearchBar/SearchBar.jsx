import React from "react"
import { useState } from "react";
import { Paper, InputBase, TextField, IconButton, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    
    const [value, setValue] = useState('');

        return (
            <Paper
                component="form"
                sx={{ margin: 5, display: 'flex', alignItems: 'center', minWidth:"50%", maxWidth: "60%", borderRadius:10, p: '2px 4px 0px 10px'}}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }