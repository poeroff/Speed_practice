
import Header from "./header/Header";
import classes from "./Main.module.css"
import { useLoaderData } from "react-router-dom";
import MainPost from "./MainPost"


const Main = () => {
  const data = useLoaderData();
  console.log(data)




  return (

    <div>
      {data.map((post, index) => (
        <MainPost key={index} post={post} />
      ))}
    </div>

  )








}

export default Main;



export async function loader() {


  try {
    const data = await fetch('http://localhost:8080/');
    return data; // 성공 시 데이터 반환
  } catch (error) {
    console.error("Error loading data:", error);
    return null; // 실패 시 null 반환
  }
}

