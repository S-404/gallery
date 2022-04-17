import React from "react"
import {Link} from "react-router-dom"

const MyNavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Gallery</Link>
                </li>
                <li>
                    <Link to="/about-me">About Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MyNavBar