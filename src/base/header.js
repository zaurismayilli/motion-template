import React from 'react'
import {NavLink } from 'react-router-dom'
export class Header extends React.Component {
    search (e) {
        let searchVal = e.target.value.toUpperCase();
        let searchArray =  document.querySelector(".search-result");
        let lengthList = searchArray.querySelectorAll("li").length;
        for(let i = 0; i < lengthList ; i++) {
           let val =  searchArray.querySelectorAll("li")[i].querySelector("h3").textContent;

            if(val.toUpperCase().indexOf(searchVal) > -1) {
                searchArray.style.display="block";
                searchArray.querySelectorAll("li")[i].style.cssText = `
                    visibility:visible;
                    transform:scale(1);
                `;
                searchArray.querySelectorAll("li")[i].setAttribute("data-search", "active");
                setTimeout(() => {
                    searchArray.querySelectorAll("li")[i].style.display = "block";
                }, 0)
            }else {
                searchArray.querySelectorAll("li")[i].style.cssText = `
                visibility:hidden;
                transform:scale(0);
                `;
                searchArray.querySelectorAll("li")[i].setAttribute("data-search", "deactive");
                setTimeout(() => {
                    searchArray.querySelectorAll("li")[i].style.display = "none";
                }, 305);
            }
        }
        if(searchVal.length  === 0) {
            searchArray.style.display="none";
        }
    }
    render () {
        return (
            <header>
                <div className="container">
                    <div className="search-block">
                        <input type="text" autoComplete="off"  onKeyUp={(e) => this.search(e)} placeholder="search" />
                        <ul className="search-result" >
                            <li>
                                <NavLink to="/blog-detail/1" >
                                    <div className="src-img">  <img src="/assets//image/content/slider1.jpg" alt="" title="" /> </div>
                                    <h3> Resident evil </h3>
                                    <span> demo title </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog-detail/1" >
                                    <div className="src-img">  <img src="/assets//image/content/slider1.jpg" alt="" title="" /> </div>
                                    <h3> Resident evil </h3>
                                    <span> demo title </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog-detail/1" >
                                    <div className="src-img">  <img src="/assets//image/content/slider1.jpg" alt="" title="" /> </div>
                                    <h3> Resident evil </h3>
                                    <span> demo title </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <ul className="menus">
                            <li> <NavLink   to="/home"  exact={true} >Home</NavLink > </li>
                            <li> <NavLink  to="/about" >About</NavLink > </li>
                            <li> <NavLink to={"/blog"} >Blog</NavLink> </li>
                            <li> <NavLink to={"/login"} >Login</NavLink> </li>
                            <li> <NavLink to={"/register"} >Register</NavLink> </li>
                            <li> <NavLink to={"/contact"} >Contact</NavLink> </li>
                            <li> <NavLink to={"/admin"} >Admin</NavLink> </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <NavLink  to="/">
                            <span className="anime-icon">
                                <i className="bar"></i>
                                <i className="bar"></i>
                                <i className="bar"></i>
                                <i className="bar"></i>
                                <i className="bar"></i>
                                <i className="bar"></i>
                                <i className="bar"></i>
                            </span>
                            Motion
                            <span> Asingle Page Template </span>
                        </NavLink >
                    </div>
                </div>
            </header>
        )
    }
}

export default Header