import React, { Component } from "react";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems" autoFocus={true}> 
                <h1 className="navbar-logo"><i className="fa-solid fa-snowflake"></i><b>Pet_Shop</b></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>  
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url} style={{textDecoration:"none", color:"orange"}}>
                                <b>{item.title}</b>
                                </a> 
                            </li>
                        )

                    } )}
    
                </ul>
            </nav>
        )
    } 
}
export default Navbar