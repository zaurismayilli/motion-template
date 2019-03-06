import React from 'react'
import {NavLink } from 'react-router-dom'
export class Footer extends React.Component {
    render () {
        return (
           <footer>
                <div className="container">
                   <div className="copyright">
                        <ul>
                            <li> <NavLink to="facebook"> <i className="fa fa-facebook"></i> </NavLink> </li>
                            <li> <NavLink  to="twi" > <i className="fa fa-twitter"></i> </NavLink> </li>
                            <li> <NavLink to="lor"> <i className="fa fa-google-plus"></i> </NavLink> </li>
                        </ul>
                        <p> © 2013 <NavLink   to="/home"> Motion Template </NavLink>. Design by Begha </p>
                   </div>
                </div>
           </footer>
        )
    }
}

export default Footer