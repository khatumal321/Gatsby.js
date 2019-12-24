import React from "react";
import { Link } from 'gatsby';
import './header.css'

const Header = () => (
    <header>
        <h1>Majid Ashraf</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <hr />
    </header>
)

export default Header;

