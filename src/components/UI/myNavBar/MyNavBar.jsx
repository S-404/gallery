import React from "react"
import {Container, Navbar, Offcanvas} from "react-bootstrap"
import Person from "../../person/Person"
import NavLinks from "./NavLinks"

const MyNavBar = () => {
    // 1.4. Должен присутствовать хэдер с «меню-бургером».
    // При нажатии на него слева должно всплывать навигационное меню,
    // где будет присутствовать 2 ссылки («Галерея» и «Обо мне»),
    // а также отображаться ваш аватар, имя и почтовый адрес.

    return (
        <Navbar collapseOnSelect bg="light" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Person/>
                        <NavLinks/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default MyNavBar