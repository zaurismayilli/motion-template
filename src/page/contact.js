import React from 'react'
import PageHeader from '../include/page_header'
export class Contact extends React.Component {
    render () {
        return (
            <section className="pg-section ">
                <PageHeader />
                <div className="section-form">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username"> username </label>
                                <input id="username" autoComplete="off" type="text" className="" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"> email </label>
                                <input id="email" autoComplete="off" type="email" className="" placeholder="example@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message"> Message </label>
                                <textarea id="message"  autoComplete="off" className="" placeholder ="some message"></textarea>
                            </div>
                            <div className="form-group text-right">
                                <button type="button" className="form-submit"> form send </button>
                            </div>
                        </form>                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact