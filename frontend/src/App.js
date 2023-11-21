import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Root , {loader as Rootloader } from "./components/pages/Root";
import Error from "./components/pages/Error";
import Main   from "./components/mainpage/Main";


const router = createBrowserRouter([
  {path: "/" , errorElement : <Error></Error> ,children : [
    {index : true , element :  <Root> </Root>, loader : Rootloader}
  ]}

])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
