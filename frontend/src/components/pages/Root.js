import Main from "../mainpage/Main"
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
        <Main></Main>
        <main>
         <Outlet></Outlet>
        </main>

        </>
    )
    
}
export default Root;