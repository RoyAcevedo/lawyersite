import { Component } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems"
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import './Navbar.css'

class Navbar extends Component {
    state = { clicked:false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ace Attorney <i class="fas fa-balance-scale"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Link to="#">
                    <Button renderAs="button">
                        <span>Login</span>
                    </Button>
                </Link>
                <Link to="/Form">
                    <Button renderAs="button">
                        <span>Register</span>
                    </Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar;