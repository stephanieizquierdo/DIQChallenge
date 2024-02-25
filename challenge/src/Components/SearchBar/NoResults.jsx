import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const NoResults= () => (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <PersonSearchOutlinedIcon sx={{width:200, height: 200, color: "#3D3C51", alignItems:"center", marginTop:10}}/>
        <h1 style={{color: "#3D3C51"}}>No results found!</h1>
        <h3 style={{color: "#3D3C51"}}>We couldn't find what you're looking for</h3>
    </div>
)

export default(NoResults)