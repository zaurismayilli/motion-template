import React from 'react'
import PageHeader from '../include/page_header'
import {NavLink } from 'react-router-dom'
export class Blog_Detail extends React.Component {
    render () {
        const blog = this.props.blogs.slice(0,3);
        const blogDetail = this.props.blogs.filter( blog => {
            return parseInt(blog.id, 0) === parseInt(this.props.id, 0)
        })
        return (
            <section className="pg-section ">
            <PageHeader />
            <div className="section-blog">
                <div className="container">
                {blogDetail.map((blog, i) => {
                    return (
                        <div className="blog-detail" key={i}>
                            <div className="bl-detail-image">
                                <img src={blog.image}  alt="blog 3" title=" blog 3" />
                            </div>
                            
                            <div className="detail-header">
                                <h3> {blog.header} </h3>
                            </div>
                            <div className="detail-content">
                                <p>
                                   {blog.content}
                                </p>
                            </div>
                        </div>
                    )
                })}

                    <div className="more-bloglist">
                        <h3> same blog list  </h3>
                        <ul className="bloglist-ul">
                            {blog.map((blogs, i) => {
                                return (
                                  <li key={i}>
                                    <div className="bloglist-image">
                                        <NavLink to="more">
                                            <img src={blogs.image} alt={blogs.image} title={blogs.image} />
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
                                            <NavLink to={'/blog-detail/' + blogs.id}  > more </NavLink>
                                        </div>
                                       
                                    </div>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Blog_Detail