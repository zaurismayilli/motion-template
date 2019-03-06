
import React from 'react'
import PageHeader from '../include/page_header'
import {NavLink } from 'react-router-dom'
export class Blog extends React.Component {

    
    render () {
        const blog = this.props.blogs
        return (
            <section className="pg-section ">
                <PageHeader />
                <div className="section-blog">
             
                    <div className="container">  
                   
                        <ul className="bloglist-ul">
                            {blog.map((blogs, i) => {
                                   
                                return (
                                  <li key={i}>
                                    <div className="bloglist-image">
                                        <NavLink to={'/blog-detail/' + blogs.id} onClick={(e) => window.scrollTo(0,0) } >
                                            <img src={blogs.image} alt={blogs.image} title={blogs.header} />
                                        </NavLink>
                                    </div>
                                    <div className="bloglist-text">
                                        <div className="bloglist-header">
                                            <h3> {blogs.header} </h3>
                                        </div>
                                        <div className="bloglist-content">
                                            <p> {blogs.content} </p>
                                        </div>
                                        <div className="bloglist-more">
                                            <NavLink to={'/blog-detail/' + blogs.id} onClick={(e) => window.scrollTo(0,0) } > more </NavLink>
                                        </div>
                                    </div>
                                </li>
                                )
                            })}
                        </ul>
                        <ul className="paging">
                            <li> <NavLink to="1"> <i className="fa fa-angle-left" ></i></NavLink> </li>
                            <li> <NavLink to="1">1 </NavLink> </li>
                            <li> <NavLink to="1">2 </NavLink> </li>
                            <li> <NavLink to="1">3 </NavLink> </li>
                            <li> <NavLink to="1">4 </NavLink> </li>
                            <li> <NavLink to="1">5 </NavLink> </li>
                            <li> <NavLink to="1"> <i className="fa fa-angle-right" ></i></NavLink> </li>
                        </ul>
                    </div>
               
                </div>
            </section>
        )
    }
}

export default Blog