
import { useState , useRef} from "react";
import classes from "./Mainpost.module.css"

import { MDBInput } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion'


import { GiAmericanShield } from "react-icons/gi";
import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Mainpost = (props) => {

    const [detailimg, setdetailimg] = useState(true)
    const [Like, setLiek] = useState(false);
    const [show, setShow] = useState(false);
    const comment = useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const imghendler = () => {
        setdetailimg(false)
    }
    const commenthendler = () => {
        setdetailimg(true)
    }

    const submithandler = () => {
        setLiek(!Like)
    }


    return (
        <>
            <div className={classes.mainpost} >

                <div className={classes.postoption}>
                    <div className={classes.maintitle}><GiAmericanShield /> {props.title}</div>

                </div>
                <div className={classes.postimg}>
                    <img className={classes.Mainimg} src={props.imageUrl} onClick={handleShow} />
                </div>
                <div className={classes.content}>
                    <br></br>
                    {/* {!Like && <AiOutlineHeart size="30" onClick={Likerhandler} />}
                {Like && <AiFillHeart size="30" onClick={Likerhandler} />} */}
                    <p>  {props.title} : {props.content}</p>
                </div>





            </div>
            <div>


                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header >
                        <Modal.Title className={classes.detail}>
                            <Button variant="light" onClick={imghendler}> IMG </Button>
                            <Button variant="light" onClick={commenthendler}>COMMENT</Button>

                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        
                         <img src={props.imageUrl} className={classes.detailimg} />
                         <form onSubmit={submithandler}>
                            {detailimg && <MDBInput className={classes.detailinput} wrapperClass='mb-4' label='comment' type='text' ref={comment}/>}

                         </form>
                       
          
                    </Modal.Body>

                   

                </Modal>

            </div>
        </>
    )
}
export default Mainpost