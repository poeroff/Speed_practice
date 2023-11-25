import { MDBModal, MDBFile, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, } from 'mdb-react-ui-kit';
import classes from "./Profile.module.css"
import { useSelector } from 'react-redux';


import { useState } from 'react';

const Profile = (props) => {

    const [updatemypage, setupdatemypage] = useState(true);
    const updatetoogle = () => {setupdatemypage(!updatemypage);  props.valid() };
    const [image, setImage] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const accessToken = useSelector(state => state.login.Loginvalid)
    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        setImage(file)
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }
    const submithandler = (event) => {
        updatetoogle()
        event.preventDefault()

        const formData = new FormData();
        console.log(image)
        formData.append("image", image);
        fetch("http://localhost:8080/userimg", {
          method: "PUT",
          headers: {
    
            "Authorization": accessToken
          },
          body: formData
        }).then(res => res.json()).then(resData => {
          console.log(resData)
        }).catch(err => console.log(err))
        updatetoogle();

        props.valid()

    }
    const outupdatemodal = () => {
        props.valid()
        
    }
    return (
        
            <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage}  tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent >
                        <MDBModalHeader>
                            <MDBModalTitle className={classes.profile}> 프로필 사진 변경 </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
                        </MDBModalHeader>
                        {imageSrc !== null && <img className={classes.postimg} src={imageSrc} />}
                        {imageSrc === null && <MDBFile className={classes.postinput} accept="image/*" multiple type="file" onChange={e => onUpload(e)} />}
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



export default Profile;