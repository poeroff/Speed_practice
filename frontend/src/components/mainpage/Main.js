
import Header from "./header/Header";
import classes from "./Main.module.css"
import { useLoaderData } from "react-router-dom";
import MainPost from "./MainPost"
import { useEffect, useState } from "react";
import { BiSolidUpArrowSquare } from "react-icons/bi";

import React from "react";


const Main = () => {
  const data = useLoaderData();
  
  const handleScroll = () => {
    if (!window.scrollY) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }





  return (
    <React.Fragment >
      <div>
        {data.map((item) => (
          <MainPost key = {item.userId} title = {item.title} content = {item.content} imageUrl = {"http://localhost:8080" + item.imagePath}></MainPost>
        ))}
      </div>

      <div className={classes.topBtn_wrap}>
          <BiSolidUpArrowSquare className={classes.topBtn}  onClick={handleScroll} size="50"/>
      </div>
    </React.Fragment>

  )








}

export default Main;



export async function loader() {


  try {
    const data = await fetch('http://localhost:8080/post');
    return data; // 성공 시 데이터 반환
  } catch (error) {
    console.error("Error loading data:", error);
    return null; // 실패 시 null 반환
  }
}

