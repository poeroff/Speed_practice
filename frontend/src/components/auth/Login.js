
import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';
import { useRef} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {LoginActions} from "../../store/Login-action"
import {motion} from "framer-motion"

const Login = () =>{
  let sessionStorage = window.sessionStorage;
  const dispatch = useDispatch();
  const userId = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [errormessage, seterrormessage] = useState([]);

  const submithandler  = (event) => {
    
    event.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
     
      body: JSON.stringify({ UserId: userId.current.value, Password: password.current.value,  })
    }).then(res => {
      return res.json(); 
    }).then(resData => {
      const errorArray = resData.errorMessage;
      if(!errorArray){
        sessionStorage.setItem("loginId", resData.accessToken)
        dispatch(LoginActions.Loginvalid());
         navigate("/")
       }
       else{
        seterrormessage(errorArray); 
        
       }
    });
  }
    return (
        <motion.form  initial={{ opacity: 0,  y : -100}} animate={{ opacity: 1,  y: 0}} onSubmit={submithandler} className="p-3 my-5 d-flex flex-column w-50 ">
          <h1 className={classes.title}> LOGIN </h1>
          {errormessage && <h2 className={classes.errormessage}> {errormessage}</h2>}
          <MDBInput wrapperClass='mb-4' label='User_id' id='form1' type='text' ref={userId}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref = {password}/>
          <div className="d-flex justify-content-between mx-3 mb-4">
          <Link to ="/signup" className={classes.Forgot}>아이디가 없으신가요?</Link>
          </div>
          <MDBBtn className="mb-4" type='submit'>Login</MDBBtn> 
        </motion.form>
      );
}
export default Login;


