
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import promise from 'redux-promise-middleware'




import {blog, slider, itemSlider, persons, aboutUs} from './reducer/reducer'

export const store = createStore(combineReducers({blog, slider, itemSlider, persons, aboutUs}), applyMiddleware(createLogger(), thunk, promise()))

export default store
