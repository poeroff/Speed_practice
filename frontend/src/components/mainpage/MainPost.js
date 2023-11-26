
import { useState } from "react";
import classes from "./Mainpost.module.css"
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { FiAlignJustify } from "react-icons/fi";
import { GiAmericanShield } from "react-icons/gi";


const Mainpost = (props) => {

    const [option ,setoption] = useState(false)
    const [Like, setLiek] = useState(false);


    const optionhandler = () => {
        setoption(!option)
    }

    const Likerhandler = () => {
        setLiek(!Like)
    }


    return (
        <div className={classes.mainpost}>
            <form>
                <div  className={classes.postoption}>
                    <div className={classes.maintitle}><GiAmericanShield /> {props.title}</div>
                  
                </div>
                <div className={classes.postimg}>
                    <img className={classes.Mainimg} src={props.imageUrl} />
                </div>
                <div className={classes.content}>
                    <br></br>
                    {/* {!Like && <AiOutlineHeart size="30" onClick={Likerhandler} />}
                {Like && <AiFillHeart size="30" onClick={Likerhandler} />} */}
                    <p>  {props.title} : {props.content}</p>
                </div>

            </form>

        </div>
    )
}
export default Mainpost