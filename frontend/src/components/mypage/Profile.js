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
import classes from "./Profile.module.css"

import { useState } from 'react';

const Profile = (props) => {

    const [updateimg, setupdateimg] = useState(true);
    const imgtoogle = () => setupdateimg(!updateimg);

    const [imageSrc, setImageSrc] = useState(null);
    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }

    const outEidtProfile = ()=>{
        props.valid();

    }
    const submithandler = () =>{
        props.valid();
    }
    return (
        <form onSubmit={submithandler}>
            <MDBModal className={classes.modal} open={updateimg} setOpen={setupdateimg} onClick={outEidtProfile} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent  >
                        <MDBModalHeader>
                            <MDBModalTitle className={classes.profile}>프로필 사진 변경</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={imgtoogle} > </MDBBtn>
                        </MDBModalHeader>
                        {imageSrc !== null && <img className={classes.postimg} src={imageSrc} />}
                        {imageSrc === null && <input className={classes.postinput} accept="image/*" multiple type="file" onChange={e => onUpload(e)} />}
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={imgtoogle} type="submit">
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
export default Profile;