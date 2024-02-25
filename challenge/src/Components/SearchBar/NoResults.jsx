import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { NoResultStyles } from './NoResultsStyle';

const NoResults= ({theme}) => {
    const styles= NoResultStyles(theme)
    return(
        <div style={styles.mainContainer}>
            <PersonSearchOutlinedIcon sx={styles.icon}/>
            <h1 style={styles.text}>No results found!</h1>
            <h3 style={styles.text}>We couldn't find what you're looking for</h3>
        </div>
    )
}

export default(NoResults)