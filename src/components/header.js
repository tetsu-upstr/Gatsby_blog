import React from 'react'
import { Link } from "gatsby"
import Styles from "./header.module.scss"

const Header = () =>{
    return(
        <header className={Styles.txt}>
            <h1>upstr web</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/works">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header