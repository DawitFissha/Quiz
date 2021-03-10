import {Button} from '@material-ui/core'
export default function Nextq({next,count,max}){
    return(
     <Button color="primary" variant="contained" onClick={next} disabled={count>=max?true:false}>
        Next question
    </Button>
    )
}