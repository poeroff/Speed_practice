import { useRouteError } from "react-router-dom"
import PageContent from "./Pagecontent";
const Error = () => {
    const error = useRouteError();
    
    let title = 'An error occurred!';
    return (
        <PageContent title={title}>
            <p>{ error.data.statusText}</p>
        </PageContent>

    )



}
export default Error