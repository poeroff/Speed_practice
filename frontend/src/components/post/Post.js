import React, { useState, useRef } from 'react';
import { MDBModal, MDBFile, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalFooter, MDBContainer, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, } from 'mdb-react-ui-kit';
import classes from "./Post.module.css"
import { useSelector } from 'react-redux';

const Post = (props) => {
  const [updatemypage, setupdatemypage] = useState(true);
  const updatetoogle = () => setupdatemypage(!updatemypage);
  const Inputpost = useRef();

  const [imageSrc, setImageSrc] = useState(null);
  const onUpload = (e) => {
    const file = e.target.files[0];
    setImageSrc(file)
    // const reader = new FileReader();
    // reader.readAsDataURL(file);

    // return new Promise((resolve) => { 
    //     reader.onload = () => {	
    //         setImageSrc(reader.result || null); // 파일의 컨텐츠
    //         resolve();
    //     };
    // });
  }
  const accessToken = useSelector(state => state.login.Loginvalid)

  const submithandler = (event) => {
    event.preventDefault();
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
    }).then(res => res.json()).catch(err => console.log(err))
  }

  const outupdatemodal = () => {
    props.valid();
  }

  return (
    <form onSubmit={submithandler}>
      <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage} onClick={outupdatemodal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className={classes.profile}> 게시글 공유</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
            </MDBModalHeader>
            <MDBFile className={classes.postinput} accept="image/*" multiple type="file" onChange={e => onUpload(e)} />

            <input placeholder='문구를 입력하세요...' type='text' ref={Inputpost} />
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={updatetoogle}>
                Close
              </MDBBtn>
              <MDBBtn type="submit">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </form>
  );
}

export default Post