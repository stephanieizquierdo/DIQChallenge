export const Styles = ( darkMode ) => ({
    mainComponent:{
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        minWidth:"50%",
        maxWidth: "60%",
        borderRadius:10,
        p: '2px 4px 0px 10px',
        backgroundColor: darkMode ? "#161b22": "default"
    },
    inputBase:{
        ml: 1, flex: 1,
        color: darkMode ? "#d4d4d4": "default",
        "& input": {color: darkMode ? "d4d4d4": "default"},
    },
    iconButton:{
        p: '10px',
    },
    icon:{
        color: darkMode? "gray": "default",
    }
})
