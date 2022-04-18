import React from "react"
import {Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import {withNavbarRoutes} from "../../../router/routes"

const NavLinks = () => {
    return (
        <Nav className="m-3">
            <>
                {withNavbarRoutes.map(route => (
                        <Navbar.Toggle
                            key={route.name}
                            as={Link}
                            to={route.path}
                        >
                            {route.name}
                        </Navbar.Toggle>
                ))}
            </>
        </Nav>
    )
}

export default NavLinks