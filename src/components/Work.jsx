import React from 'react'
import rentpic from'../assests/boxes.png';
import weather from '../assests/weather.png';
import recipes from '../assests/recipes.jpg'
import'../styles/_work.scss';

function Work() {
    return (
        
        <div id="work" className="work">
            <div className="work__item">
            
                <img src={rentpic} alt="rentpic" className="work__image" />
                    <div className="work__info">
                    <p className="work__item__heading">Rent A Bin</p>
                    <p className="work__item__tech">REACT | SASS | JAVASCRIPT | EXPRESS | NODE.JS</p>
                    <p className="work__item__paragraph">I developed Rent A Bin app while in school as my final capstone assignment. Given 10 days, we had to come up with an idea for a web application that would solve some type of issue. I built Rent A Bin, an application that allows you to book the plastic bins for moving .
                                                        To build this application, I used React and JavaScript, as well as CSS/SASS for my front-end.For the back-end, I used Express and Node.js.</p>
               </div>
            </div>
        
            <div className="work__item">
                    <img src={recipes} alt="rentpic" className="work__image" />
                <div className="work__info">
                    <p className="work__item__heading work__item__heading--right">Food Recipe Plaza</p>
                    <p className="work__item__tech work__item__tech--right">REACT | SASS | JAVASCRIPT </p>
                    <p>Food Recipe Plaza was developed for a 24 hour pair programming competition in which we came in SECOND PLACE. My partner and I decided we wanted to push our skills and create an interactive app for food, so we built food Recipe Plaza. It give you random selction of food according to ingridents.
                                To build this application, we used React and JavaScript, as well as CSS/SASS for the front-end. </p>
                </div>
            </div>
            <div className="work__item">
                <img src={weather} alt="weather" className="work__image" />
                <div className="work__info">
                    <p className="work__item__heading work__item__heading--right">Weather App</p>
                    <p className="work__item__tech work__item__tech--right">REACT | SASS | JAVASCRIPT </p>
                    <p>Weather app i created to check the weather of any city by using openweather API.In this a user can enter any city and the app will show the country name ,weather with maximum and lowest temp with icon.
                     To build this application, I used React and JavaScript, as well as CSS/SASS for the front-end.</p>
                </div>
            </div>
        </div>
    )
}

export default Work;
