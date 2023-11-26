
import { useState , useRef, useEffect} from "react";
import classes from "./Mainpost.module.css"

import { MDBInput } from 'mdb-react-ui-kit';

import React from 'react';
import { useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Mainpost = (props) => {

    const [detailimg, setdetailimg] = useState(true)
   
    const [Like, setLiek] = useState(false);
    const [show, setShow] = useState(false);
    const comment = useRef();
    const accessToken = useSelector(state => state.login.Loginvalid)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [comments , setcomments] = useState()



    const imghendler = () => {
        setdetailimg(false)
    }
    const commenthendler = () => {
        setdetailimg(true)
    }

    const submithandler = (event) => {
        event.preventDefault()
        console.log( comment.current.value)
       fetch("http://localhost:8080/comment",{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
        },
        body : JSON.stringify({content : comment.current.value ,postId : props.id})
       }).then(res => {
        res.json()
       }).then(resData => {
        console.log(resData)
       }).catch(err => {
        console.log(err);
       })
    }

    useEffect(() => {
        fetch("http://localhost:8080/comment/" + props.id)
        .then(res => res.json()).then(resData => {setcomments(resData.commentsList)}).catch(err => {console.log(err);})

    },[comment])

   

    return (
        <>
            <div className={classes.mainpost} >

                <div className={classes.postoption}>
                    <div className={classes.maintitle}>작성자 : {props.title}</div>

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
                          { detailimg && <form onSubmit={submithandler}>
                             <MDBInput className={classes.detailinput} wrapperClass='mb-4' label='comment' type='text' ref={comment}/>
                            {comments && comments.map(comment => (
                             <p key = {comment.commentId}> {comment.Content} </p>
                         ))}
                         
                         </form>}
                       
                       
          
                    </Modal.Body>

                   

                </Modal>

            </div>
        </>
    )
}
export default Mainpost