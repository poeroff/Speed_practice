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
import { useState } from 'react';
import classes from "./Mypageupdate.module.css"
import { useSelector } from 'react-redux';

const Mypageupdate = (props) => {
    const [updatemypage, setupdatemypage] = useState(true);
    const updatetoogle = () => {setupdatemypage(!updatemypage);  props.valid()};




    const submithandler = () => {

        props.valid();

    }
    const outupdatemodal = () => {
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
                                        label='Nickname:'
                                    />
                            </div>
                            <div className='mb-3'>
                                    <MDBTextArea
                                        
                                        labelClass='col-form-label'
                                        label='description:'
                                    />
                            </div>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={updatetoogle}>
                            Close
                        </MDBBtn>
                        <MDBBtn type="submit">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>


    )

}
export default Mypageupdate
