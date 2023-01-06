import { Link, Outlet } from "react-router-dom";
import AuthStatus from "../utils/AuthStatus";

function Layout() {
    return (
        <div>
            <h1>Layout</h1>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}
export default Layout;