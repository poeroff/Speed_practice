import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Root , {loader as Rootloader } from "./components/pages/Root";
import Error from "./components/error/Error"
import Main   from "./components/mainpage/Main";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup";


const router = createBrowserRouter([
  {path: "/" , errorElement : <Error></Error> ,children : [
    {index : true , element : <Root> </Root>},
    {path : "login" , element : <Login></Login>},
    {path : "signup" , element : <Signup> </Signup>}
    
  ]}

])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
