import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { NoResultStyles } from './NoResultsStyle';

const NoResults= () => (
    <div style={NoResultStyles.mainConteiner}>
        <PersonSearchOutlinedIcon sx={NoResultStyles.icon}/>
        <h1 style={NoResultStyles.text}>No results found!</h1>
        <h3 style={NoResultStyles.text}>We couldn't find what you're looking for</h3>
    </div>
)

export default(NoResults)