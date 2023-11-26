
import React from "react";
import classes from "./Seachpost.module.css"
import  { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { MDBInput } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';


const Seachpost = (props) => {

    const [show, setShow] = useState(false);
    const [detailimg, setdetailimg] = useState(true)
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
        
    }

    return (
        <>
        <div className={classes.mypageimg}>
            <img src={"http://localhost:8080/" + props.image}  onClick={handleShow}/>
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
               <form onSubmit={submithandler}>
                  {detailimg && <MDBInput className={classes.detailinput} wrapperClass='mb-4' label='comment' type='text' ref={comment}/>}

               </form>
             

          </Modal.Body>

         

      </Modal>
      </>
    )


}
export default Seachpost;