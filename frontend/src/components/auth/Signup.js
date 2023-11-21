
import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Signup = () => {
  const nickname = useRef();
  const userId = useRef();
  const password = useRef();
  const checkpassword = useRef();
    return (
        <form className="p-3 my-5 d-flex flex-column w-50 ">
          <h1 className={classes.title}> SIGN UP </h1>
          <MDBInput  wrapperClass='mb-4' label='nickname' id='form2' type='text' ref={nickname}/>
          <MDBInput  wrapperClass='mb-4' label='User_id' id='form1' type='text'  ref={userId}/>
          <MDBInput  wrapperClass='mb-4' label='Password' id='form2' type='password'  ref={password}/>
          <MDBInput  wrapperClass='mb-4' label='checkpassword' id='form2' type='password'  ref={checkpassword}/>
          <MDBBtn className="mb-4" type='submit'>Sign in</MDBBtn> 
        </form>
      );


}
export default Signup;