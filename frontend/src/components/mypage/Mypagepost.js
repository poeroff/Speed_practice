
import classes from "./Mypagepost.module.css"


const Mypagepost = (props) => {
    return (
        <div className={classes.mypageimg}>
            <img src=  {"http://localhost:8080/" + props.image} />
        </div>
    )
}
export default Mypagepost;