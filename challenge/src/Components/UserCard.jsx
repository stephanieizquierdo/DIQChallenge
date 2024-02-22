import EmailIcon from '@mui/icons-material/Email';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';

function renderEmail(email){
    <div style={{display: "flex",  direction:"row"}}>
        <EmailIcon/>
        <h5> {email} </h5>
    </div>
}

function UserCard({user}) {
    console.log(user)
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "#"+Math.floor(Math.random() * 0x1000000).toString(16)}} aria-label="recipe">
                    {user.name[0]}
                </Avatar>
                }
                title={user.name}
                subheader={user.username}
            />
            <CardContent>
                {user.mail}
            </CardContent>
        </Card>
    )
}

export default(UserCard)