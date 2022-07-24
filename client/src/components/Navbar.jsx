import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>HLV Shop</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button varian={"outline-light"}>Admin Panel</Button>
                    <Button varian={"outline-light"}>Sign in</Button>
                </Nav>
                :
                <Nav className="me-" style={{color: 'white'}}>
                    <Button varian={"outline-light"}>Authorization</Button>
                </Nav>
            }
        </Navbar>
    );
};

export default NavBar;