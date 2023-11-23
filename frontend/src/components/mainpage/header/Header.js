import React, { useState ,useRef, useEffect } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";
import { CgLogIn } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
import { LoginActions } from '../../../store/Login-action';
import { useNavigate } from 'react-router-dom';


import {MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalFooter,MDBContainer,MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import classes from "./Header.module.css"
import { Link  } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  let sessionStorage = window.sessionStorage;
  const Login = useSelector((state) => state.login.Loginvalid)
  const dispatch = useDispatch();

  const Inputpost = useRef();
  const [imageSrc, setImageSrc] = useState(null);
      const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }

  

  const [openBasic, setOpenBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [basicModal1, setBasicModal1] = useState(false);
  const [serarch, setsearch] = useState(false)
  const [loginsession, setloginsession] = useState();

  const toggleOpen = () => {
    if(Login){
      setBasicModal(!basicModal)
    }
    else {
      navigate("/login")

    }
  };

  const searchopen = (event) => { event.preventDefault(); setsearch(!serarch) }

  const [createproducts, setcreateproducts] = useState(false);

  const postsubmithandler = (event) => {
    event.preventDefault();





    
    setImageSrc(null)
    
    console.log(imageSrc+".png", Inputpost.current.value)
    Inputpost.current.value = null

  }
  const Logouthandler = () =>{
    sessionStorage.removeItem("loginId")
    dispatch(LoginActions.Logoutvalid());

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
              <Link to="/"><AiFillHome size="40" /></Link>

            </form>

            <form className={classes.Login}>
             {!Login  && <Link to="login"><MDBBtn color='primary'><CgLogIn size="25" />Login</MDBBtn> </Link> }
             {Login  && <Link to="/"><MDBBtn color='primary' onClick={Logouthandler}><CgLogIn size="25" />Logout</MDBBtn> </Link> }

            </form>
            <form className={classes.mypage}>
              <Link to= {Login ? "mypage": "login"}><MDBBtn color='primary'> <AiOutlineUser size="25" />My Page</MDBBtn> </Link>
            </form>




            <MDBBtn className={classes.post} onClick={toggleOpen} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>creat post <CgMathPlus size="25" /></MDBBtn>
            <form onSubmit={postsubmithandler}>
              <MDBModal className={classes.modal} open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>게시글 작성</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>

                    
                     {imageSrc !== null && <img className={classes.postimg} src={imageSrc}/>}
                     {imageSrc === null  && <input className={classes.postinput} accept="image/*" multiple type="file"onChange={e => onUpload(e)} />}
                      
           
                    <input placeholder='문구를 입력하세요...' type='text' ref={Inputpost} />
                    <MDBModalFooter >
                      <MDBBtn color='secondary' onClick={toggleOpen} >
                        Close
                      </MDBBtn>
                      <MDBBtn type='submit'  onClick={toggleOpen} >Save changes</MDBBtn>
                    </MDBModalFooter>
                    
                  </MDBModalContent>
                  
                </MDBModalDialog>
              </MDBModal>
              </form>
            


            {/* <MDBBtn className={classes.content} onClick={toggleOpen1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>creat content <CgMathPlus size="25" /></MDBBtn>
            <MDBModal className={classes.modal} open={basicModal1} setOpen={setBasicModal1} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>게시글 작성(글)</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen1}></MDBBtn>
                  </MDBModalHeader>
                  <input className ={classes.postInput}placeholder='제목'  type='text'/>
                  <input  placeholder='부가설명' type='text'/>

                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={toggleOpen1}>
                      Close
                    </MDBBtn>
                    <MDBBtn>Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal> */}
            {!openBasic && <h1 className={classes.title}><Link to="/" > SIX SENSE </Link></h1>}



            <form className={classes.Search}>
              <MDBModal open={serarch} setOpen={setsearch} tabIndex='-1'>
                <MDBModalDialog >
                  <MDBModalContent>

                    <input type='search' className={classes.SearchInput} placeholder="search..." aria-label='Search' />

                  </MDBModalContent>

                </MDBModalDialog>

              </MDBModal>

              <MDBBtn color='primary'  onClick={searchopen}><CgSearchLoading size="25" />Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </React.Fragment>
  );

}
export default Header;