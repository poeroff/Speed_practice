
import classes from "./Mypage.module.css"
import React, { useEffect } from 'react';
import { AiTwotoneHighlight } from "react-icons/ai";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import plus from "../image/plus.png"
import { useState } from "react";
import Profile from "./Profile";
import Mypageupdate from "./Mypageupdate";
import { useSelector } from 'react-redux';
import { useLoaderData } from "react-router-dom";
import Mypagepost from "./Mypagepost";



const MyPage = () => {

    const [updateimg, setupdateimg] = useState(false);
    const [updatemypage, setupdatemypage] = useState(false);
    const imgtoogle = () => { setupdateimg(!updateimg); console.log("heelo") };

    const updatetoogle = () => setupdatemypage(!updatemypage);

    const data = useLoaderData();
    console.log(data)
    
    
    return (
        <div className="gradient-custom-2" >
            <MDBContainer className="py-5 h-100"  >
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row abc" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column " style={{ width: '180px', height: "150px" }}>
                                    <MDBCardImage className={classes.mypageimg} src={data.user.imageurl ? "http://localhost:8080/" + data.user.imageurl : "https://t1.daumcdn.net/news/202105/25/petzzi/20210525062913108ttvf.jpg"} alt="Generic placeholder image" style={{ objectFit: 'cover', zIndex: '1' }} />
                                    <MDBBtn outline color="dark" onClick={imgtoogle} style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">{data.user.nickname}</MDBTypography>
                                    <MDBCardText>{data.user.description}</MDBCardText>
                                </div>
                                {updateimg && <Profile valid={imgtoogle} ></Profile>}

                                <AiTwotoneHighlight size="35" onClick={updatetoogle} className={classes.updateIcon} />

                                {updatemypage && <Mypageupdate valid={updatetoogle}></Mypageupdate>}

                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">{data.postCount}</MDBCardText>
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
                                    <MDBCardText className="lead fw-normal mb-0"> 게시물 </MDBCardText>



                                </div>
                                <div className={classes.myimg}>
                                    {data.post.map(post => (
                                        <Mypagepost key={post.postId} id = {post.postId} image={post.image}></Mypagepost>
                                    ))}
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


export async function loader() {
    try {
        const respone = await fetch("http://localhost:8080/userSearch", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": sessionStorage.getItem("loginId")
            },

        })

        if (!respone.ok) {
            throw new Error("error")
        }
        const data = await respone.json();

        return data

    }
    catch (err) {
        return err;
    }




}

