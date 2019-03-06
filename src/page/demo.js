import React from 'react'

export class Demo extends React.Component {
    


    render () {


        const blogs = this.props.blogs
        return (
            <div>  {blogs.map(blog =>  <li>  {blog.header} </li> )} </div>
        )
    }
}

export default Demo