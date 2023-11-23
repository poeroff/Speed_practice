
import classes from "./Mypage.module.css"
import React from 'react';
import { AiTwotoneHighlight } from "react-icons/ai";
import {

    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,

    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse,
} from 'mdb-react-ui-kit';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import plus from "../image/plus.png"
import { useState } from "react";

const MyPage = () => {
    const [basicModal, setBasicModal] = useState(false);
    const [updateimg, setupdateimg] = useState(false);
    const [updatemypage, setupdatemypage] = useState(false);


    const toggleOpen = () => setBasicModal(!basicModal);

    const imgtoogle = () => setupdateimg(!updateimg);
    const updatetoogle = () => setupdatemypage(!updateimg);

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


    return (
        <div className="gradient-custom-2" >
            <MDBContainer className="py-5 h-100"  >
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row abc" style={{ backgroundColor: '#000', height: '200px' }}>

                                <div className="ms-4 mt-5 d-flex flex-column " style={{ width: '150px' }}>

                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />


                                    <MDBBtn outline color="dark" onClick={imgtoogle} style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn>

                                    <form>
                                        <MDBModal className={classes.modal} open={updateimg} setOpen={setupdateimg} tabIndex='-1'>
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle>프로필 사진 변경</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={imgtoogle}></MDBBtn>
                                                    </MDBModalHeader>
                                                    {imageSrc !== null && <img className={classes.postimg} src={imageSrc} />}
                                                    {imageSrc === null && <input className={classes.postinput} accept="image/*" multiple type="file" onChange={e => onUpload(e)} />}
                                                    <MDBModalFooter>
                                                        <MDBBtn color='secondary' onClick={imgtoogle}>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn type="submit">Save changes</MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>

                                    </form>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">Andy Horwitz</MDBTypography>
                                    <MDBCardText>New York</MDBCardText>
                                </div>

                               
                                <AiTwotoneHighlight size="35"  onClick={updatetoogle} className={classes.updateIcon}/>
                                
                                <form>
                                        <MDBModal className={classes.modal} open={updatemypage} setOpen={setupdatemypage} tabIndex='-1'>
                                            <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                        <MDBModalTitle> 자기소개 변경</MDBModalTitle>
                                                        <MDBBtn className='btn-close' color='none' onClick={updatetoogle}></MDBBtn>
                                                    </MDBModalHeader>
                                                    <MDBInput wrapperClass='mb-4' label='Nickname'  type='text' />
                                                    <MDBInput wrapperClass='mb-4' label='residence'  type='text'/>
                                              

                                    
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