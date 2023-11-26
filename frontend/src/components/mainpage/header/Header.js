import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";
import { CgLogIn } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
import { LoginActions } from '../../../store/Login-action';
import { useNavigate } from 'react-router-dom';
import Post from '../../post/Post';
import logo from "../../image/logo.jpg"
import Home from "../../image/home.png"


import {MDBModal, MDBModalDialog, MDBSwitch, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalFooter, MDBContainer, MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,} from 'mdb-react-ui-kit';
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
import Usersearch from '../../search/Usersearch';


const Header = (props) => {
  const navigate = useNavigate();
  let sessionStorage = window.sessionStorage;
  const Login = useSelector((state) => state.login.Loginvalid)
  const dispatch = useDispatch();


  const [openBasic, setOpenBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [basicModal1, setBasicModal1] = useState(false);
  const [serarch, setsearch] = useState(false)
  const [loginsession, setloginsession] = useState();

  const toggleOpen = () => {
    if (Login) {
      setBasicModal(!basicModal)
      console.log("heelo")
    }
    else {
      navigate("/login")

    }
  };
  
  const searchopen = (event) => { event.preventDefault(); setsearch(!serarch) }


  const Logouthandler = () => {
    sessionStorage.removeItem("loginId")
    dispatch(LoginActions.Logoutvalid());

  }


  return (
    <React.Fragment >



      <MDBNavbar className={classes.navbar} expand='lg' light bgColor='light'>
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
              <Link to="/"><img src={Home} alt="Home" style={{ width: '50px', height: '50px' }} /> </Link>

            </form>

            <form className={classes.Login}>
              {!props.Login && <Link to="login"><MDBBtn color='primary'><CgLogIn size="25" />Login</MDBBtn> </Link>}
              {props.Login && <Link to="/"><MDBBtn color='primary' onClick={Logouthandler}><CgLogIn size="25" />Logout</MDBBtn> </Link>}

            </form>
            <form className={classes.mypage}>
              <Link to={props.Login ? "mypage" : "login"}><MDBBtn color='primary'> <AiOutlineUser size="25" />My Page</MDBBtn> </Link>
            </form>




            <MDBBtn className={classes.post} onClick={toggleOpen} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>creat post <CgMathPlus size="25" /></MDBBtn>
            {basicModal && <Post valid={toggleOpen}></Post>}

            {!openBasic && <h1 className={classes.title}><Link to="/" > PURR~ </Link></h1>}
            
            

              <MDBBtn color='primary' className ={classes.SearchInput} onClick={searchopen}><CgSearchLoading size="25" />Search</MDBBtn>
              {serarch && <Usersearch></Usersearch>}
            
           
            {/* <MDBSwitch className={classes.switch} onClick={switchhandler}/> */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </React.Fragment>
  );

}
export default Header;