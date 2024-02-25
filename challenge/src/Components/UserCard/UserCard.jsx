import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Styles, randomColor } from './Style';

function renderEmail(email, style){
    return (
        <div style={style.cardInfoContainer}>
            <EmailIcon sx={style.icon} />
            <a style={style.link} href={"mailto:"+ email}>{email}</a>
        </div>
    )
}

function renderPhone(phone, style){
    return (
        <div style={style.cardInfoContainer}>
            <CallIcon sx={style.icon} />
            <a style={style.link} href={"tel:" + phone}> {phone} </a>
        </div>
    )
}

function renderAddress(address, style){
    return (
        <div style={style.cardInfoContainer}>
            <PlaceIcon sx={style.icon} />
            <a style={style.link} target="_blank" href={"https://maps.google.com/?q="+address.geo.lat+ ", "+address.geo.lng } rel="noreferrer" > {address.city} </a>
        </div>
    )
}

function renderCompany(company, style){
    return (
        <div style={style.cardInfoContainer}>
            <span title='Company'>
                <BusinessIcon sx={style.icon}/>
            </span>
            <p style={style.cardInfo}>{company}</p>
        </div>
    )
}

function UserCard({user, theme}) {
    const style = Styles(theme)
    return(
        <Card sx={style.cardContainer}>
            <CardHeader
                avatar={
                    <Avatar sx={randomColor(user.username)} aria-label="recipe">
                        {user.name[0]}
                    </Avatar>
                }
                title={user.name}
                subheader={user.username}
                subheaderTypographyProps={style.subHeader}
                sx={style.cardHeader}
            />
            <CardContent>
                {renderEmail(user.email, style)}
                {renderPhone(user.phone, style)}
                {renderAddress(user.address, style)}
                {renderCompany(user.company.name, style)}
            </CardContent>
        </Card>
    )
}

export default(UserCard)