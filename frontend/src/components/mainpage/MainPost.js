
import classes from "./Mainpost.module.css"

const Mainpost =(props) =>{
    console.log(props)
    const imageurl = props.post.image
    const formattedImageUrl = imageurl.replace(/\\/g, '/');
    console.log(formattedImageUrl)
    return (
        <div>
            
            <img className = {classes.Mainimg} src = {formattedImageUrl}/>
            <div>
                <h1>{props.post.postId}</h1>
            </div>
        </div>
    )
}
export default Mainpost