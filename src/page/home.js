import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {NavLink} from 'react-router-dom'
import Coverflow from 'react-coverflow'


export class Home extends React.Component {
    componentDidMount() {
            function map_container () {
                new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: 40.3963918, lng: 49.7993824 },
                    zoom: 12
                  });
            }
            map_container();
      }
    render () {
        const persons = this.props.persons
        const itemSlider = this.props.itemslider
        const slider = this.props.slides
        return (
            <section className="pg-section ">
                <div className="slider">
                    <div className="container ">
                        <div className="slider-block">
                            <Slider>
                            {slider.map((slides, index) => <div key={index}>
                                <div className="slider-text">
                                    <h2>{slides.header}</h2>
                                    <div>{slides.content}</div>
                                </div>
                                <img src={slides.cover} title={slides.title} alt={slides.alt} /> 
                            </div>)}
                            </Slider>
                        </div>  
                    </div>
                </div>
                <div className="creative-section" >
                    <div className="container">
                        <div className="sectio-header">
                            <h3> Smart & Creative  </h3>
                            <span> This is why you will use it :) </span>
                        </div>
                        <div className="section-content">
                            <ul className="smart_creative">
                                <li>
                                    <h3>  Multi purpose </h3>
                                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing.. </p>
                                </li>
                                <li>
                                    <h3> Flat UI </h3>
                                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing.. </p>
                                </li>
                                <li>
                                    <h3>  Creative Design </h3>
                                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing.. </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="talanted-block">
                    <div className="container">
                        <div className="sectio-header">
                            <h3>Talented & Experts  </h3>
                            <span> This is our team :) </span>
                        </div>
                        <div className="section-content">
                            <ul className="person-li">
                                {persons.map((person, index) => {
                              
                              return <li key={index} > 
                                        <div className="personImage">
                                            <img src={person.cover} alt={person.profile} title={person.profile} />
                                        </div>
                                        <div className="personContent">
                                            <h3> {person.name}  </h3>
                                            <span> {person.work} </span>
                                            <NavLink to={person.follow}> <i className="fa fa-twitter"></i>  follow me </NavLink>
                                        </div>
                                   </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="talent-block">
                    <div className="container">
                        <div className="sectio-header">
                            <h3> Elegant & Genuine </h3>
                            <span> This is how our works looks like :) </span>
                        </div>
                        <div className="section-content">
                            <ul className="talent-ul">
                                <Coverflow  displayQuantityOfSide={2} navigation={false} enableHeading={false} >
                                        {itemSlider.map((slides, index) => {
                                            return <li key={index}>
                                                <div>
                                                    
                                                     <img src={slides.cover} alt={slides.description} title={slides.title} /> 
                                                     <p >{slides.slider_text} </p>
                                                </div>
                                            </li>
                                        })}
                                </Coverflow>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="db-block">
                    <div className="container">
                        <ul className="db-list">
                            <li>
                                <div className="db-header">
                                    <h3> Start Up </h3>
                                    <span>  For beginners </span>
                                </div>
                                <div className="db-content">
                                    <ul>
                                        <li> Basic pages </li>
                                        <li> MySQL Databases </li>
                                        <li> Bandwith </li>
                                        <li> Storage space </li>
                                    </ul>
                                </div>
                                <div className="db-footer">
                                    <NavLink to=""> Order </NavLink>
                                    <h2> $ <span> 15 </span> / mo </h2>
                                </div>
                            </li>
                            <li>
                                <div className="db-header">
                                    <h3> Start Up </h3>
                                    <span>  For beginners </span>
                                </div>
                                <div className="db-content">
                                    <ul>
                                        <li> Basic pages </li>
                                        <li> MySQL Databases </li>
                                        <li> Bandwith </li>
                                        <li> Storage space </li>
                                    </ul>
                                </div>
                                <div className="db-footer">
                                    <NavLink to=""> Order </NavLink>
                                    <h2> $  <span> 15 </span> / mo </h2>
                                </div>
                            </li>
                            <li>
                                <div className="db-header">
                                    <h3> Start Up </h3>
                                    <span>  For beginners </span>
                                </div>
                                <div className="db-content">
                                    <ul>
                                        <li> Basic pages </li>
                                        <li> MySQL Databases </li>
                                        <li> Bandwith </li>
                                        <li> Storage space </li>
                                    </ul>
                                </div>
                                <div className="db-footer">
                                    <NavLink to=""> Order </NavLink>
                                    <h2> $  <span> 15 </span> / mo </h2>
                                </div>
                            </li>
                        </ul>
                        <div className="bl-more"> And more available plans for all needs .... <NavLink to="more" > Check here </NavLink>  </div>
                    </div>
                </div>
                <div className="map-block">
                    <div className="map-info">
                        <h3> Contact Us </h3>
                        <NavLink to="mailto:7oroof@7oroof.com"> 7oroof@7oroof.com </NavLink>
                        <span> what is your aim ? </span>
                    </div>
                    <div id="map" className="map-content"> </div>
                </div>
            </section>
        )
    }
}

export default Home

