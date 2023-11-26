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
    MDBTextArea,

    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import { useState ,useRef } from 'react';
import classes from "./Mypageupdate.module.css"
import { useSelector } from 'react-redux';
import { json } from 'react-router-dom';

const Mypageupdate = (props) => {
    const [updatemypage, setupdatemypage] = useState(true);
    const updatetoogle = () => {setupdatemypage(!updatemypage);  props.valid()};
    const nicknameupdate = useRef();
    const descriptiondupdate = useRef()
    const accessToken = useSelector(state =>state.login.Loginvalid)
   




    const submithandler = (event) => {
        event.preventDefault();
        console.log("heelo")
        fetch("http://localhost:8080/userUpdate",{
            method :"PUT",
            headers :{
                "Content-type" : "application/json",
                "Authorization" : accessToken
            },
            body: JSON.stringify({nickname : nicknameupdate.current.value , description : descriptiondupdate.current.value })
        }).then(res => res.json()).catch(err => {console.log(err)})
        props.valid();

    }
 
    return (

        <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className={classes.mypage}> 프로필 변경</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form>
                          
                            <div className='mb-3'>
                                    <MDBInput
                                        
                                        labelClass='col-form-label'
                                        label='description:'
                                        ref={descriptiondupdate}
                                    />
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={updatetoogle}>
                            Close
                        </MDBBtn>
                        <MDBBtn type="submit" onClick={submithandler}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>


    )

}
export default Mypageupdate
