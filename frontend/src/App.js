import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Root from "./components/pages/Root";


const router = createBrowserRouter([
  {path: "/" , element : <Root> </Root>}
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
