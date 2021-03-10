import React,{useState,useRef,useEffect} from 'react'
import QuizInfo from './info/quizInfo'
import Qdata from './questions .json'
import { makeStyles } from '@material-ui/core/styles';
import Questions from './question/questions'
import Answer from './answer/answers'
import {Box,Paper} from '@material-ui/core'
import QuizProgress from './progress/quizProgress'
import Nextq from './answer/nextq'
import Result from './answer/result'
var val = 20;


//var progressValue=0;
function App() {
  const valueRef=useRef(10)
  const inc = ()=>{
   valueRef.current=valueRef.current+10
    console.log(valueRef.current)
  }

  const [result,setResult]=useState()
  const rightRef = useRef(0)
  const wrongRef = useRef(0)
  let data = Qdata[0];
  const Qcount=useRef(1);
  const [questions,setQuestions]=useState(data);
  useEffect(()=>{
    setResult(" ");
    },[questions])

  const num_ques=Qdata.length;
  const AnswerHandler = (ans)=>{
  setResult(ans)
  if(ans=="Correct"){
    rightRef.current++
  }
  else if(ans=="Sorry"){
    wrongRef.current++
  }
  console.log(ans)
  
  }

  const score = Math.floor((rightRef.current/Qcount.current)*100)
  const max_score = Math.floor(((rightRef.current+(num_ques-Qcount.current))/num_ques)*100)
  const min_score = Math.floor((rightRef.current/num_ques)*100)
  const Next = ()=>{
    Qcount.current++
    setQuestions(Qdata[Qcount.current-1])
    //progressValue=value
    console.log(score)
    console.log(max_score)
    console.log(min_score)
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      //width: '100%',
      minWidth: 600,
      minHeight:500,
      maxHeight:550,
    },
    progress: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),
      border: '1px solid',
      borderRadius:'10px',
      height:'12px',
      background:`linear-gradient(to right,#000000, #000000 ${min_score}% , #a9a9a9 ${min_score}%,#a9a9a9 ${score}% ,#dcdcdc 0% ${score}%)`
      
    },
  }));
  const classes = useStyles();
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
      <Answer answers={questions} answerFunc={AnswerHandler} result={result}/>
      </Box>
      <Box mt={4} ml={18}>
           <Result result={result}/>
            </Box>
      <Box ml={18} pb={1}>
               <Nextq next={Next} count={Qcount.current} max={num_ques}/>
            </Box>
            <Box ml = {1} pb={1} mt={2} pr={1} >
              <div className ={classes.progress}></div>
            </Box>
            
      </Paper>   
      </Box>
     

    </div>
  );
}

export default App;
