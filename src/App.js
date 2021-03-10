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
var score =0
var min_score=0
var max_score=100
function App() {
  
  const [result,setResult]=useState()
  const rightRef = useRef(0)
  const wrongRef = useRef(0)
 
  let data = Qdata[0];
  const Qcount=useRef(1);
  const countRef = useRef(0)
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

    const Next = ()=>{
     Qcount.current++
    countRef.current++
    score = Math.floor(((rightRef.current)/(Qcount.current-1))*100)
    max_score = Math.floor(((rightRef.current+(num_ques-(countRef.current)))/num_ques)*100)
    min_score = Math.floor((rightRef.current/num_ques)*100)
    setQuestions(Qdata[Qcount.current-1])
    
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      minWidth: 600,
      minHeight:500,
      maxHeight:800,
    },
    progress: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),
      border: '1px solid',
      borderRadius:'10px',
      height:'12px',
      background:`linear-gradient(to right,#000000, #000000 ${min_score}% , #a9a9a9 ${min_score}%,#a9a9a9 ${score}% ,#dcdcdc ${score}% ${max_score}% ,#FFFFFF ${max_score}%)`
      
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
            <Box display = 'flex' pb={1/8}>
              <Box flexGrow={1} ml={1}>
                <h3>{`Score ${score}%`}</h3>
              </Box>
              <Box mr={1}>
                <h3>{`Max Score ${max_score}%`}</h3>
              </Box>
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
