import React from 'react'
import PageHeader from '../include/page_header'
export class Register extends React.Component {
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
                                <label htmlFor="password"> password </label>
                                <input id="password" autoComplete="off" type="password" className="" placeholder="*******" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-password"> re password </label>
                                <input id="re-password" autoComplete="off" type="password" className="" placeholder="*******" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"> Phone </label>
                                <input id="phone" autoComplete="off" type="number" className="" placeholder="+994 *** ** **" />
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

export default Register