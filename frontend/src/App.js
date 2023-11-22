import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Root , {loader as Rootloader } from "./components/pages/Root";
import Error from "./components/error/Error"
import Main   from "./components/mainpage/Main";
import Login , {action as Loginaction} from "./components/auth/Login"
import Signup from "./components/auth/Signup";
import Mypage from "./components/mypage/Mypage"
import Post  from "./components/post/Post";
import Header from "./components/mainpage/header/Header";


//errorElement : <Error></Error>
const router = createBrowserRouter([
   {path: "/" ,element: <Root></Root>, children : [
    {index : true , element :<Post></Post>},
    
    {path : "login" , element : <Login></Login>},
    {path : "signup" , element : <Signup> </Signup>},
    {path : "mypage" , element : <Mypage></Mypage>},
    
  ]}
])



function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
