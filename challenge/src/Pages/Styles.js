
export const Styles = ( darkMode ) => ({
    mainContainer:{
        background: darkMode? "radial-gradient(circle, rgba(69,10,68,1) 0%, rgba(29,51,99,1) 100%)" : "radial-gradient(circle, rgba(238,174,237,1) 0%, rgba(148,174,233,1) 100%)",
        maxWidth:"100%",
        paddingBottom:50,
        minHeight: "100vh",
        maxHeight:"100%",
    },
    searchBarHeader:{
        padding: "5px 0px 0.5px 0px",
        display: "flex",
        justifyContent: "center"
    },
    gridCards:{justifyContent: "center", alignItems:"center"},
    circularProgress:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 'auto',
        width: '10vw'
    },
})
