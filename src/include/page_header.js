import React from 'react'

export class PageHeader extends React.Component {
    render () {
        let pageHeader = window.location.pathname.split("/");
        return (
            <section className="page-cover-header ">
                <div className="container">
                    <h3> {pageHeader}  content </h3>
                </div>
            </section>
        )
    }
}

export default PageHeader