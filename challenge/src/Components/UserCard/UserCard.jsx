import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Styles, randomColor } from './Style';

function renderEmail(email){
    return (
        <div style={Styles.cardInfoContainer}>
            <EmailIcon sx={Styles.icon} />
            <a style={Styles.link} href={"mailto:"+ email}>{email}</a>
        </div>
    )
}

function renderPhone(phone){
    return (
        <div style={Styles.cardInfoContainer}>
            <CallIcon sx={Styles.icon} />
            <a style={Styles.link} href={"tel:" + phone}> {phone} </a>
        </div>
    )
}

function renderAddress(address){
    return (
        <div style={Styles.cardInfoContainer}>
            <PlaceIcon sx={Styles.icon} />
            <a style={Styles.link} href={"https://maps.google.com/?q="+address.geo.lat+ ", "+address.geo.lng }> {address.city} </a>
        </div>
    )
}

function renderCompany(company){
    return (
        <div style={Styles.cardInfoContainer}>
            <span title='Company'>
                <BusinessIcon sx={Styles.icon}/>
            </span>
            <p style={Styles.cardInfo}>{company}</p>
        </div>
    )
}

function UserCard({user}) {
    console.log(user)
    return(
        <Card sx={Styles.cardContainer}>
            <CardHeader
                avatar={
                    <Avatar sx={randomColor()} aria-label="recipe">
                        {user.name[0]}
                    </Avatar>
                }
                title={user.name}
                subheader={user.username}
                sx={Styles.cardHeader}
            />
            <CardContent>
                {renderEmail(user.email)}
                {renderPhone(user.phone)}
                {renderAddress(user.address)}
                {renderCompany(user.company.name)}
            </CardContent>
        </Card>
    )
}

export default(UserCard)