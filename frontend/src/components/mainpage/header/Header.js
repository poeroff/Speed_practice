import React, { useState } from 'react';
import {

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
import userIcon from "../../image/userIcon.png"


import Post from '../../post/Post';
const Header = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [basicModal1, setBasicModal1] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  const toggleOpen1 = () => setBasicModal1(!basicModal1);

  const [createproducts, setcreateproducts] = useState(false);

  const producthandler = () => {
    setcreateproducts(!createproducts);
  }

  return (
    <React.Fragment>

      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer className={classes.header} fluid>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <form className={classes.Login}>

              <Link to="login"><MDBBtn color='primary'>Login</MDBBtn> </Link>

            </form>
            <form className={classes.mypage}>
              <Link to="mypage"><MDBBtn color='primary'>My Page</MDBBtn> </Link>

            </form>

            
              <MDBBtn className={classes.post} onClick={toggleOpen} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>creat post</MDBBtn>
              <MDBModal className ={classes.modal} open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>게시글 작성(사진 & 동영상)</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <input placeholder='제목'/> 
                    <input placeholder='제목'/> 
                    <input placeholder='제목'/> 


                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleOpen}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>


              <MDBBtn className={classes.content} onClick={toggleOpen1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>creat content</MDBBtn>
              <MDBModal className ={classes.modal} open={basicModal1} setOpen={setBasicModal1} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>게시글 작성(글)</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleOpen1}></MDBBtn>
                    </MDBModalHeader>
                   
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleOpen1}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>


          



            {!openBasic && <h1 className={classes.title}> SIX SENSE </h1>}



            <form className={classes.Search}>
              <input type='search' className={classes.SearchInput} placeholder="search..." aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </React.Fragment>
  );

}
export default Header;