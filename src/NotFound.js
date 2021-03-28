import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>I'm not actually sorry, it's your fault</p>
            <Link to='/'>Back to the Homepage...</Link>
        </div>
    );
}
 
export default NotFound;