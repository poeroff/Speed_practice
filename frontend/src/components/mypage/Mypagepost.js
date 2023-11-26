
import classes from "./Mypagepost.module.css"
import { CgClose } from "react-icons/cg";

import { useSelector } from 'react-redux';
import React, { useState, useRef ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { MDBInput } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';








const Mypagepost = (props) => {
    const accessToken = useSelector(state => state.login.Loginvalid)
    const [show, setShow] = useState(false);
    const [detailimg, setdetailimg] = useState(true)
    const comment = useRef();
    const [comments , setcomments] = useState()
    
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imghendler = () => {
        setdetailimg(false)
    }
    const commenthendler = () => {
        setdetailimg(true)
    }
    const submithandler = (event) => {
        event.preventDefault()
        console.log(comment.current.value)
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




    const deletehandler = (event) => {
        event.preventDefault();


        fetch("http://localhost:8080/post/" + props.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
        })
            .then(res => res.json()).then(resData => console.log(resData))
            .catch(err => {
                console.log(err);
            });

    }
    useEffect(() => {
        fetch("http://localhost:8080/comment/" + props.id)
        .then(res => res.json()).then(resData => { setcomments(resData.commentsList)}).catch(err => {console.log(err);})

    },[comment])
    return (
        <>
        <div className={classes.mypageimg}>
            <CgClose className={classes.xicon} onClick={deletehandler} />
            <img src={"http://localhost:8080/" + props.image}  onClick={handleShow} />
        </div>
           


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title className={classes.detail}>
                        <Button variant="light" onClick={imghendler}> IMG </Button>
                        <Button variant="light" onClick={commenthendler}>COMMENT</Button>

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                     <img src={"http://localhost:8080/" + props.image} className={classes.detailimg} />
                     { detailimg && <form onSubmit={submithandler}>
                             <MDBInput className={classes.detailinput} wrapperClass='mb-4' label='comment' type='text' ref={comment}/>
                            {comments && comments.map(comment => (
                             <p key = {comment.commentId}> {comment.Content} </p>
                         ))}
                         
                         </form>}
                   
      
                </Modal.Body>

               

            </Modal>

        
        </>
    )
}
export default Mypagepost;