import {Button,Box,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useRef,useState,useEffect} from 'react';
import Result from './result'
import Boolean from './boolean'
const useStyles = makeStyles({
    button: {
      //width: '100%',
      minWidth: 200,
    },
  });

const Answer = ({answers})=>{
    const [result,setResult]=useState()
    const classes = useStyles();
    useEffect(()=>{
        setResult(" ");
        },[answers])
    const handleAnswer = (e) =>{
    //console.log(e.target.innerText)
       if(decodeURIComponent(answers.correct_answer).toUpperCase()==e.target.innerText){
            setResult("Correct")
             }
        else{
            setResult("Sorry")
        }
        }
   if(answers.type=='multiple'){
        return(

            <Box display="flex" flexDirection="column">
            <Box display="flex">
                <Box mb={2}>
                <Button variant="contained" className={classes.button}
                    name='first'
                    onClick={handleAnswer}
                    
                    disabled={result==="Correct" || result=="Sorry"?true:false}
                    >
                    {decodeURIComponent(answers.correct_answer)}</Button>
                </Box>
                <Box ml={2}>
                <Button variant="contained" className={classes.button}
                    onClick={handleAnswer}
                    
                    disabled={result==="Correct" || result=="Sorry"?true:false}
                >{decodeURIComponent(answers.incorrect_answers[0])}</Button>
                </Box>
            </Box>
            <Box display="flex">
                <Box>
                <Button variant="contained" className={classes.button}
                onClick={handleAnswer}
                
                disabled={result==="Correct" || result=="Sorry"?true:false}
                >
                    {decodeURIComponent(answers.incorrect_answers[1])}</Button>
                </Box>
                <Box ml={2}>
                <Button variant="contained" className={classes.button} id="D"
                onClick={handleAnswer}
                
                disabled={result==="Correct" || result=="Sorry"?true:false}
                >
                    {decodeURIComponent(answers.incorrect_answers[2])}</Button>
                </Box>
            </Box>
            <Box mt={4} ml={8}>
           <Result result={result}/>
            </Box>
        </Box>
        
        
    )
    }
    if(answers.type=='boolean'){
        return(
            <div>
        <Box display='flex' flexDirection='column'>
        <Box display="flex">
        <Box>
        <Button variant="contained" className={classes.button}
        onClick={handleAnswer}
        disabled={result==="Correct" || result=="Sorry"?true:false}
        >
            {answers.correct_answer}
            </Button>
        </Box>
        <Box ml={2}>
        <Button variant="contained" className={classes.button}
        onClick={handleAnswer}
        disabled={result==="Correct" || result=="Sorry"?true:false}
        >
            {answers.incorrect_answers[0]}
            </Button>
        </Box>
    </Box>
    <Box mt={4} ml={18}>
           <Result result={result}/>
            </Box>
                </Box>
            </div>
        )
    }
}
export default Answer