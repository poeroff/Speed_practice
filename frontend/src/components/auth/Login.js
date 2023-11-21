
import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = () =>{
  const userId = useRef();
  const password = useRef();

  const submithandler  = (event) => {
    

  }
    return (
        <form onSubmit={submithandler} className="p-3 my-5 d-flex flex-column w-50 ">
          <h1 className={classes.title}> LOGIN </h1>
          <MDBInput wrapperClass='mb-4' label='User_id' id='form1' type='text' ref={userId}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref = {password}/>
          <div className="d-flex justify-content-between mx-3 mb-4">
            
          <Link to ="/signup" className={classes.Forgot}>아이디가 없으신가요?</Link>
          </div>
          <MDBBtn className="mb-4" type='submit'>Sign in</MDBBtn> 
        </form>
      );
}
export default Login;


