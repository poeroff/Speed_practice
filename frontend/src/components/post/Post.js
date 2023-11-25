import React, { useState, useRef } from 'react';
import { MDBModal, MDBFile, MDBModalBody, MDBModalDialog, MDBInput, MDBTextArea, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalFooter, MDBContainer, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, } from 'mdb-react-ui-kit';
import classes from "./Post.module.css"
import { useSelector } from 'react-redux';

const Post = (props) => {
  const [updatemypage, setupdatemypage] = useState(true);
  const updatetoogle = () => { setupdatemypage(!updatemypage); props.valid()};
  const Inputpost = useRef();
  const [errormessage , seterrormessage] = useState();

  const [imageSrc, setImageSrc] = useState(null);
  const [image, setImage] = useState(null);
  const onUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    setImageSrc(file)
    return new Promise((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  }
  const accessToken = useSelector(state => state.login.Loginvalid)

  const submithandler = (event) => {

    
    event.preventDefault();
    if(imageSrc && Inputpost.current.value){
      const formData = new FormData();
      console.log(imageSrc)
      formData.append("image", imageSrc);
      formData.append("content", Inputpost.current.value);
  
      fetch("http://localhost:8080/post", {
        method: "POST",
        headers: {
  
          "Authorization": accessToken
        },
        body: formData
      }).then(res => res.json()).then(resData => {
        console.log(resData)
      }).catch(err => console.log(err))
      updatetoogle();
    }
    else{
      if(!imageSrc){
        seterrormessage("이미지 파일이 없습니다")
      }
      else if(!Inputpost.current.value){
        seterrormessage("설명이 존재하지 않습니다")
      }

    }

  }


  const outupdatemodal = () => {
    const updatetoogle = () => { setupdatemypage(!updatemypage); };

    updatetoogle();


  }

  return (
    
    <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle className={classes.profile}> 게시글 공유</MDBModalTitle>
            
            <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
            
          </MDBModalHeader>
          {errormessage && <MDBModalTitle className={classes.errormessage}> {errormessage}</MDBModalTitle>}
          {image !== null && <img className={classes.postimg} src={image} />}
          {image === null && <MDBFile className={classes.postinput} accept="image/*" multiple type="file" onChange={e => onUpload(e)} />}
          <MDBModalBody>
            <div className='mb-3'>
              <MDBInput
                labelClass='col-form-label'
                label='description:'
                type='text'
                ref={Inputpost}
              />
            </div>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={updatetoogle}>
              Close
            </MDBBtn>
            <MDBBtn type="submit" onClick={submithandler}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
   






  );
}

export default Post