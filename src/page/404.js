import React from 'react'
import PageHeader from '../include/page_header'
export class Error extends React.Component {
    render () {
        return (
            
            <section className="pg-section ">
                <PageHeader />
                {this.props.demos}
                <div className="section-about">
                    <div className="container">
                        <h3> 404 page </h3>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Error