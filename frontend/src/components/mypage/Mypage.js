
import classes from "./Mypage.module.css"
import React from 'react';
import {

    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,

    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import plus from "../image/plus.png"
import { useState } from "react";

const MyPage = () => {
    const [basicModal, setBasicModal] = useState(false);
    const [profile, setprofile] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const Editprofile = () => setBasicModal(!profile);
    return (
        <div className="gradient-custom-2" >
            <MDBContainer className="py-5 h-100"  >
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                    <MDBBtn outline color="dark"  onClick={Editprofile} style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn>
                                    <MDBModal className={classes.modal} open={profile} setOpen={setprofile} tabIndex='-1'>
                                        <MDBModalDialog>
                                            <MDBModalContent>
                                                <MDBModalHeader>
                                                    <MDBModalTitle>게시글 작성</MDBModalTitle>
                                                    <MDBBtn className='btn-close' color='none' onClick={Editprofile}></MDBBtn>
                                                </MDBModalHeader>
                                                <input placeholder='제목' type="file" />
                                                <MDBModalFooter>
                                                    <MDBBtn color='secondary' onClick={Editprofile}>
                                                        Close
                                                    </MDBBtn>
                                                    <MDBBtn>Save changes</MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModalContent>
                                        </MDBModalDialog>
                                    </MDBModal>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                                    <MDBCardText>New York</MDBCardText>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">0</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">0</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">0</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">게시물 </MDBCardText>
                                    <MDBBtn className={classes.post} onClick={toggleOpen} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>게시글 공유</MDBBtn>
                                    <MDBModal className={classes.modal} open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                                        <MDBModalDialog>
                                            <MDBModalContent>
                                                <MDBModalHeader>
                                                    <MDBModalTitle>게시글 작성</MDBModalTitle>
                                                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                                                </MDBModalHeader>
                                                <input placeholder='제목' type="file" />
                                                <MDBModalFooter>
                                                    <MDBBtn color='secondary' onClick={toggleOpen}>
                                                        Close
                                                    </MDBBtn>
                                                    <MDBBtn>Save changes</MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModalContent>
                                        </MDBModalDialog>
                                    </MDBModal>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );


}
export default MyPage;