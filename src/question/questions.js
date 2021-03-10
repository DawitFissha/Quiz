import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 550,
    },
    text:{
        
    }
  });
const Questions = ({question})=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Typography variant="h6" gutterBottom className={classes.text}>
                {decodeURIComponent(question.question)}
            </Typography>
        </div>
    )
}
export default Questions