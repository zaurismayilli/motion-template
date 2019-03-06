import React from 'react'
import reactDOM from 'react-dom'

import {store} from './store/index'
import {Provider} from 'react-redux'

import { BrowserRouter, Switch} from 'react-router-dom';

import App from './container/app'

import Header from './base/header'
import Footer from './base/footer'

export default class Index  extends React.Component {

    render () {

        return (
            <div className="full-width">
                <Header />
                    <Switch>
                        <App />
                    </Switch>
                <Footer />
            </div>
        )
    }
}


reactDOM.render( 
<Provider store={store}>
    <BrowserRouter> 
        <Index /> 
    </BrowserRouter>
</Provider>, document.querySelector("#root"));






