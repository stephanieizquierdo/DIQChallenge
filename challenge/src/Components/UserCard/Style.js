
export function randomColor(string){
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return {bgcolor: color};
}


export const Styles = ( darkMode ) => ({
    icon: { color: darkMode? "#776aa7" : "#4299E1"},
    link: {
        marginLeft: 10,
        textDecoration: "none",
        color: darkMode? "#d4d4d4": "#4B5468"
    },
    contentText: {
        marginLeft: 10,
        color: darkMode? "#d4d4d4" : "#4B5468"
    },
    cardHeader: {
        borderBottom:0.5,
        borderBottomColor: "#c3c3c3",
        color: darkMode? "#d4d4d4": "default"
    },
    subHeader: {
        color: darkMode? "#8d8d8d": "#6e6e6e"
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
        color: darkMode? "#d4d4d4" : "#4B5468",
        alignItems:"center"
    },
    cardContainer:{
        minWidth: 252,
        padding: "10px",
        backgroundColor: darkMode ? "#161b22": "white"
    }
})