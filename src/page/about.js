import React from 'react'
import PageHeader from '../include/page_header'
export class About extends React.Component {
    render () {
        return (
            
            <section className="pg-section ">
                <PageHeader />
                {this.props.demos}
                <div className="section-about">
                    <div className="container">
                        <h3>  {this.props.about.title} </h3>
                        <p> {this.props.about.content} </p>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default About