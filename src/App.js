import React,{useState,useRef} from 'react'
import QuizInfo from './info/quizInfo'
import Qdata from './questions .json'
import { makeStyles } from '@material-ui/core/styles';
import Questions from './question/questions'
import Answer from './answer/answers'
import {Box,Paper} from '@material-ui/core'
import QuizProgress from './progress/quizProgress'
import Nextq from './answer/nextq'
const useStyles = makeStyles({
  paper: {
    //width: '100%',
    minWidth: 600,
    minHeight:500,
    maxHeight:550,
  },
});
//var progressValue=0;
function App() {
  const classes = useStyles();
  
  let data = Qdata[0];
  const Qcount=useRef(1);
  
  
  
  const [questions,setQuestions]=useState(data);
  const num_ques=Qdata.length;
  const Next = ()=>{
    Qcount.current++
    setQuestions(Qdata[Qcount.current-1])
    //progressValue=value
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" pl={8} pt={2} pb={2} alignItems="center">
     <Paper className={classes.paper}>
       <Box pt={1}>
         <QuizProgress currentValue={Qcount.current} total={num_ques}/>
       </Box>
      <Box pt={2} ml={2}>
      <QuizInfo question = {questions} length ={num_ques} current={Qcount.current}/>
      </Box>
        <Box mt={4} ml={2}>
        <Questions question={questions}/>
        </Box>
      <Box mt={2} pb={2} ml={2}>
      <Answer answers={questions}/>
      </Box>
      <Box ml={18} pb={1}>
               <Nextq next={Next} count={Qcount.current} max={num_ques}/>
            </Box>
      </Paper>   
      </Box>
     

    </div>
  );
}

export default App;
