import React from 'react'
import {Rating} from '@material-ui/lab'
import {Typography} from '@material-ui/core'
var value=0;
const QuizInfo = ({question,length,current})=>{
    
    if(question.difficulty=='easy'){
        value=1
    }
    else if(question.difficulty=='medium'){
        value=2
    }
    else if(question.difficulty=='hard'){
        value=3
    }
    return(
        <div>
        <Typography variant="h5" gutterBottom>
        {`Question ${current} of ${length}`}
        </Typography>
        <Typography variant="subtitle1">
        {decodeURIComponent(question.category)}
        </Typography>
        
        {/*<Typography variant="subtitle1">{question.difficulty}</Typography>*/}
        <Rating max={3} value={value} readOnly/>
        <Typography variant="subtitle1">{question.type}</Typography>
    </div>
    )
}
export default QuizInfo;