
import React from 'react'
import { Switch, Route} from 'react-router-dom';

import Home from '../page/home'
import About from '../page/about'
import Blog from '../page/blog'
import BlogDetail from '../page/blog_detail'
import Contact from '../page/contact'
import Login from '../page/login'
import Register from '../page/register'
import Admin from '../page/admin'

import  { Redirect } from 'react-router-dom'

import errorPage from '../page/404'

import {changeBlog, addPerson, changeAb, changeSlider} from '../store/action/action'

import {connect} from 'react-redux'

export class App extends React.Component {
    constructor () {
        super ();
        this.state = {
            blogs:[],
            slider:[],
            itemSlider:[],
            about:{},
            persons:[]
        }
    }
    sendBlogs (blogs) {
       this.setState({
            ...this.state.blogs = blogs
       });
    }

    sendSlider (slider) {
        this.setState({
            ...this.state.slider = slider
        })
    }

    sendItemSlider (slider) {
        this.setState({
            ...this.state.itemSlider = slider
        })
    }

    sendAbout (about) {
        this.setState({
            ...this.state.about = about
        });
        
    }

    sendPersons (person) {
        this.setState({
            ...this.state.persons = person
        });
    }

    render () {
      
        return (
            <div className="page-content">
                <Switch>
                    <Route  exact path="/"    render  = {(props) => <Home  persons = {this.props.persons}  itemslider = {this.props.itemslider}   slides={this.props.slider} />} />
                    <Route    path="/home"   render  = {(props) => <Home  persons = {this.props.persons}  itemslider = {this.props.itemslider}   slides={this.props.slider} />}  />
                    <Route    path="/blog" render = {(props) => <Blog   blogs = {this.props.blog}  /> } /> 
                    <Route   path="/blog-detail/:id"  render={(props)=> <BlogDetail   shows={this.props.blog.id} id={props.match.params.id} blogs = {this.props.blog}/>} />
                    <Route    path="/about" render = {(props) => <About about = {this.props.aboutUs} demo={() => this.props.setName('  This is demo redux added text ',  ' this is demo title ')} /> }  /> 
                    <Route   path="/login" component={Login} />
                    <Route   path="/contact" component={Contact} /> 
                    <Route   path="/register" component={Register} /> 
                    <Route  path="/admin" render = {(props) => <Admin 
                        callBlog={this.sendBlogs.bind(this)  } 
                        finishBlog={() => this.props.changeBlog(this.state.blogs)}  

                        callSlider={this.sendSlider.bind(this)}  
                        finishSlider = {() => this.props.changeSlider(this.state.slider)}

                        callItemSlider = {this.sendItemSlider.bind(this)}
                        finishItemSlider = {() => this.props.chanegItemSlider(this.state.itemSlider)}

                        callSendAbout = {this.sendAbout.bind(this)}
                        finishAbout = {() => this.props.changeAb(this.state.about)}

                        ab = {this.props.aboutUs}

                        callPersons = {this.sendPersons.bind(this)}
                        finishPersons = {() => this.props.addPerson(this.state.persons)}
                     /> } />
                    <Route  path="/*" component={errorPage} />
                    
                </Switch>
            </div>
        )
    }
}

const blogToState = (state) => {
    return {
        blog:state.blog,
        slider:state.slider,
        itemslider:state.itemSlider,
        persons:state.persons,
        aboutUs:state.aboutUs
    }
}

const mapToStateChange = (dispatch) => {
    return {
        setName: (name, name2) => {
            dispatch({
                type:"ARTIR",
                payload:name,
                title:name2
            })
        },
        setBlog: (header, content, image) => {
            dispatch({
                type:"ADD",
                header,
                content,
                image
            })
        },
        changeBlog : (blogs) => {
            if(blogs.content !== undefined || blogs.header !== undefined || blogs.image !== undefined) {
                dispatch(changeBlog(blogs));
                //window.location.href="/";
                document.querySelector(".menus li:nth-child(3) a").click();
            }else {
                alert("all input empty !!!");
             
            }
        },
        changeSlider:(slider) => {
            if(slider.content !== undefined || slider.header !== undefined || slider.image !== undefined || slider.cover !== undefined) {
                dispatch(changeSlider(slider))
                document.querySelector(".menus li:nth-child(1) a").click();
            }else {
                alert("all input empty !!!")
            }
        },
        chanegItemSlider : (slider) => {
            if(slider.cover !== undefined || slider.title !== undefined || slider.slider_text !== undefined ) {
                dispatch({
                    type:"addItemSlider",
                    cover:slider.cover,
                    title:slider.title,
                    slider_text:slider.slider_text
                });
                document.querySelector(".menus li:nth-child(1) a").click();
            }else {
                alert("all input empty !!!")
            }
        },
        changeAb: (about) => {
            if(about.title !== '' || about.content !== '') {
                dispatch(changeAb(about));
                document.querySelector(".menus li:nth-child(2) a").click();
            }else {
                alert('empty')
            }
        },
        addPerson: (person) => {
            if(person.name !== undefined ||  person.work !== undefined ||  person.follow !== undefined ||  person.cover !== undefined ||  person.image !== undefined ) {
                dispatch(addPerson(person));
                document.querySelector(".menus li:nth-child(1) a").click();
            }else {
                alert("empty")
            }
        }
    }
}


export default connect(blogToState, mapToStateChange)(App)
