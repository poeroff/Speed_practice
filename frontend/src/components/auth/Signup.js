
import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';



const Signup = () => {
  const Nickname = useRef();
  const UserId = useRef();
  const Password = useRef();
  const CheckPassword = useRef();

  const signuphandler = (event) => {
    
    event.preventDefault();
    fetch("http://localhost:8080/signup",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ UserId : UserId.current.value, Nickname : Nickname.current.value,  Password: Password.current.value ,CheckPassword : CheckPassword.current.value})
    })

  }

    return (
        <form onSubmit = {signuphandler} className="p-3 my-5 d-flex flex-column w-50 ">
          <h1 className={classes.title}> SIGN UP </h1>
          <MDBInput  wrapperClass='mb-4' label='Nickname' name ="Nickname"id='form2' type='text' ref={Nickname}/>
          <MDBInput  wrapperClass='mb-4' label='UserId' name = "UserId" id='form1' type='text'  ref={UserId}/>
          <MDBInput  wrapperClass='mb-4' label='Password' name= "Password" id='form2' type='password'  ref={Password}/>
          <MDBInput  wrapperClass='mb-4' label='CheckPassword' name="CheckPassword" id='form2' type='password'  ref={CheckPassword}/>
          <MDBBtn className="mb-4" type='submit'>Sign in</MDBBtn> 
        </form>
      );


}
export default Signup;