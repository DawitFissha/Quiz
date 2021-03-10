import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 15,
      borderRadius: 1,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
const QuizProgress=({currentValue,total})=>{
    var value = (100/total)*currentValue  
    return(
        <BorderLinearProgress variant="determinate" value={value}/>
    )
}
export default QuizProgress