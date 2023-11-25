import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Root , {loader as Rootloader } from "./components/pages/Root";
import Error from "./components/error/Error"
import Main , {loader as Mainloader}   from "./components/mainpage/Main";
import Login , {action as Loginaction} from "./components/auth/Login"
import Signup from "./components/auth/Signup";
import Mypage, {loader as mypageloader } from "./components/mypage/Mypage"
import Post  from "./components/post/Post";
import Seachmypage ,{loader as Seachloader} from "./components/search/Seachmypage"

import Header from "./components/mainpage/header/Header";


//errorElement : <Error></Error>
const router = createBrowserRouter([
   {path: "/" ,element: <Root></Root>, children : [
    {index : true, element:<Main></Main>, loader : Mainloader},
    {path : "login" , element : <Login></Login>},
    {path : "signup" , element : <Signup> </Signup>},
    {path : "mypage" , children:[
      {index: true ,  element : <Mypage></Mypage>},
      {path : ":userId", element: <Seachmypage></Seachmypage>, }
    ]},
    
  ]}
])



function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
