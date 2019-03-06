import React from 'react'
import PageHeader from '../include/page_header'
export class Login extends React.Component {
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
                                <label htmlFor="password"> password </label>
                                <input id="password" autoComplete="off" type="password" className="" placeholder="*******" />
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

export default Login