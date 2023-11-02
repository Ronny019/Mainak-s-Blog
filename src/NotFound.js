import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 Not Found!!!</h1>
            <p>This page either doesn't exist or we're having trouble fetching it</p>
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;