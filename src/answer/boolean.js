import {Button,Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    button: {
      //width: '100%',
      minWidth: 200,
    },
  });

export default function Boolean(){
    const classes = useStyles();
    return(
        <Box display="flex">
        <Box>
        <Button variant="contained" className={classes.button}
        
        
        >
            True
            </Button>
        </Box>
        <Box ml={2}>
        <Button variant="contained" className={classes.button}
        >
            False
            </Button>
        </Box>
    </Box>
    )
}