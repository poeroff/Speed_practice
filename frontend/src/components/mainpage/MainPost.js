
import classes from "./Mainpost.module.css"

const Mainpost =(props) =>{
    console.log(props.content)
    console.log(props.imageUrl)
  

    return (
        <div className={classes.mainpost}>
            <img className ={classes.Mainimg} src={props.imageUrl}/>
            <h1 className={classes.content}> {props.content}</h1>
            
            
          
        </div>
    )
}
export default Mainpost