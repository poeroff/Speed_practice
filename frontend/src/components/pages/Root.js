import Main from "../mainpage/Main"
import { Outlet, json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Header from "../mainpage/header/Header";
import { useSelector , useDispatch } from "react-redux"
import { LoginActions } from "../../store/Login-action";
import classes from"./Root.module.css"
import { useEffect } from "react";


const Root = () => {
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(LoginActions.Loginvalid());
    })
    const Login = useSelector((state) => state.login.Loginvalid)

  
    return (
        <>
        <Header Login = {Login ? true : false}></Header>
        
        
        <main>
         <Outlet ></Outlet>
        </main>

        </>
    )
    
}
export default Root;


// export async function loader() {
//     const response = await fetch('http://localhost:8080')
  
//     if (!response.ok) {
//         const errormessage =  await response.json()
        
//         throw json(
//             { statusText: errormessage.message },
//             {
//               status: response.status
//             }
//           );
     
     
//     } else {
        
//       const resData = await response.json();
//       return resData.events;
//     }
//   }