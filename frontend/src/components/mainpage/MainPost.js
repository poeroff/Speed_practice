
import { useState } from "react";
import classes from "./Mainpost.module.css"
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Mainpost = (props) => {
    const [Like, setLiek] = useState(false);

    const Likerhandler = () => {
        setLiek(!Like)


    }


    return (
        <div className={classes.mainpost}>
            <div className={classes.postimg}>
                <img className={classes.Mainimg} src={props.imageUrl} />
            </div>
           
            <div className={classes.content}>
                <br></br>
                {/* {!Like && <AiOutlineHeart size="30" onClick={Likerhandler} />}
                {Like && <AiFillHeart size="30" onClick={Likerhandler} />} */}
                <p> {props.content}</p>
            </div>
        </div>
    )
}
export default Mainpost