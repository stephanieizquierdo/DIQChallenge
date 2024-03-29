export const NoResultStyles = ( darkMode ) => ({
    mainContainer:{
        display:"flex",
        flexDirection:"column",
        justifyItems: "center",
        alignItems: "center",
        position:"absolute",
        top:"50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
    icon:{
        width:200,
        height: 200,
        color: darkMode ? "#8382b1": "#40165e"
    },
    text:{
        color: darkMode ? "#8382b1" :"#40165e",
        paddingInline: 20,
        textAlign:"center",
    },
})