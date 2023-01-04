import {Routes, Route, Link, Outlet} from "react-router-dom";
import React from "react";


export default function App() {
    return (
        <div className="App">
            <h1>基础练习</h1>
            <p>
                这个例子演示了一些 React Router的基础特性，包括：Route, Outlet, Link等
            </p>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
    )
}

function Layout() {
    return (
        <div>
            {/*    layout route 适合放页面间共享的内容，比如导航 navigation */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            {/*    Outlet标签可以理解为上面定义的子路由的占位符 */}
            <Outlet/>
        </div>
    )
}

function Home() {
    return <div>
        <h2>Home</h2>
    </div>
}
function About() {
    return <div>
        <h2>About</h2>
    </div>
}
function Dashboard() {
    return <div>
        <h2>Dashboard</h2>
    </div>
}
function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}
