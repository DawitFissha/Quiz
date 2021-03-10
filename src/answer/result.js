import {Typography} from '@material-ui/core'
export default function Result({result}){
    return(
        <Typography variant="h4" gutterBottom>
        {result}
    </Typography>
    )
}