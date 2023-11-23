import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBBtn,

    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import classes from "./Mypageupdate.module.css"
import { useSelector } from 'react-redux';

const Mypageupdate = (props) => {
    const [updatemypage, setupdatemypage] = useState(true);
    const updatetoogle = () => setupdatemypage(!updatemypage);
    const acessToken = useSelector(state =>state.login.Loginvalid)
    


    const submithandler = () =>{
        props.valid();

    }
    const outupdatemodal = () =>{
        
        fetch("http://localhost:8080/login",{
            method : "GET",
            headers :{
                "Content-type" : "application/json",
                "Authorization" : "Bearer"+ acessToken
            },
        }).then(res => res.json()).then(resData => {
            console.log(resData)

        }).catch(err => {
            console.log(err)
        })
        props.valid();

    }
    return (
        <form onSubmit={submithandler}>
            <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage} onClick={outupdatemodal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className={classes.mypage}> 자기소개 변경</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
                        </MDBModalHeader>
                        <MDBInput wrapperClass='mb-4' label='Nickname' type='text' />
                        <MDBInput wrapperClass='mb-4' label='소개' type='text' />
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
    )

}
export default Mypageupdate
