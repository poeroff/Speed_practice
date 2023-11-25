
import { useState } from "react";
import classes from "./Mainpost.module.css"
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { FiAlignJustify } from "react-icons/fi";

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
                    <FiAlignJustify size="25" onClick={optionhandler}/>
                    {option && <div className={classes.abc}>
                        <p> ajsdhsj</p>
                    </div>}
                </div>
                <div className={classes.postimg}>
                    <img className={classes.Mainimg} src={props.imageUrl} />
                </div>
                <div className={classes.content}>
                    <br></br>
                    {/* {!Like && <AiOutlineHeart size="30" onClick={Likerhandler} />}
                {Like && <AiFillHeart size="30" onClick={Likerhandler} />} */}
                    <p> {props.content}</p>
                </div>

            </form>

        </div>
    )
}
export default Mainpost