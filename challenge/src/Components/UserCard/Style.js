
export function randomColor(){
    return ({bgcolor: "#"+Math.floor(Math.random() * 0x1000000).toString(16) })
}


export const Styles={
    icon: { color: "#4299E1"},
    link: {
        marginLeft: 10,
        textDecoration: "none",
        color: "#4B5468"
    },
    contentText: {
        marginLeft: 10,
        color: "#4B5468"
    },
    cardHeader: {
        borderBottom:0.5,
        borderBottomColor: "#c3c3c3",
    },
    cardInfoContainer:{
        display: "flex",
        flexDirection:"row",
        marginTop:10
    },
    cardInfo:{
        marginLeft: 10,
        marginTop:0,
        marginBottom:0,
        color: "#4B5468",
        alignItems:"center"
    },
    cardContainer:{
        minWidth: 252,
        padding: "10px",
    }
}