
import React from 'react';
import {MDBContainer,MDBInput,MDBCheckbox,MDBBtn,MDBIcon}from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Signup = () => {
    return (
        <form className="p-3 my-5 d-flex flex-column w-50 ">
          <h1 className={classes.title}> SIGN UP </h1>
          <MDBInput  wrapperClass='mb-4' label='nickname' id='form2' type='text'/>
          <MDBInput  wrapperClass='mb-4' label='User_id' id='form1' type='email'/>
          <MDBInput  wrapperClass='mb-4' label='Password' id='form2' type='password'/>
          <MDBInput  wrapperClass='mb-4' label='checkpassword' id='form2' type='password'/>
          <MDBBtn className="mb-4" type='submit'>Sign in</MDBBtn> 
        </form>
      );


}
export default Signup;