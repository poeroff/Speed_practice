
import React from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import classes from "./Signup.module.css";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftSquareFill } from "react-icons/bs";



const Signup = () => {
  const Nickname = useRef();
  const UserId = useRef();
  const Password = useRef();
  const CheckPassword = useRef();
  const navigate = useNavigate();
  const [errormessage, seterrormessage] = useState([]);


  

  const signuphandler = (event) => {

    event.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
     
      body: JSON.stringify({ UserId: UserId.current.value, Nickname: Nickname.current.value, Password: Password.current.value, CheckPassword: CheckPassword.current.value })
    }).then(res => res.json()).then(resData => {
      const errorArray = resData.message;
      seterrormessage(prevmsg => errorArray.map(err => (err.msg))); 
      
      console.log("heelo")
      if(errorArray.length === 0 ){
        console.log("heelo")
        navigate("/login")
      }
    });
    ;
  }



  return (
    <motion.form  initial={{ opacity: 0,  y : -100}} animate={{ opacity: 1,  y: 0}} onSubmit={signuphandler} className="p-3 my-5 d-flex flex-column w-50 ">
      <div className={classes.signupheader}>
        <Link to="/login"><h1> <BsArrowLeftSquareFill /></h1></Link>
        <h1 className={classes.title}> SIGN UP </h1>

      </div>
    
      {errormessage[0] && <h2 className={classes.errormessage}> {errormessage[0]}</h2>}
      <MDBInput wrapperClass='mb-4' label='Nickname' name="Nickname"  type='text' ref={Nickname} />
      <MDBInput  wrapperClass='mb-4' label='UserId' name="UserId"  type='text' ref={UserId} />
      <MDBInput wrapperClass='mb-4' label='Password' name="Password"  type='password' ref={Password} />
      <MDBInput wrapperClass='mb-4' label='CheckPassword' name="CheckPassword"  type='password' ref={CheckPassword} />
      <MDBBtn className="mb-4" type='submit'>Sign in</MDBBtn>
    </motion.form>
  );


}
export default Signup;