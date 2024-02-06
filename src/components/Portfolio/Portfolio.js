import React from 'react';

function AboutMe() {

  return (
    <section className="portfolio" id='portfolio'>
        <h2 className="portfolio__title">Projects</h2>
            <ul className='portfolio__list'>
                {/* <li className='portfolio__list-item-container'>
                    <a className='portfolio__list-item link' target="_blank" href="https://artem-liamichev.github.io/how-to-learn/">
                        <span className='portfolio__list-item-name'>Статичный сайт</span>
                        <span className='portfolio__list-item-icon'></span>
                    </a>
                </li> */}
                <li className='portfolio__list-item-container'>
                    <div className='portfolio__list-item' target="_blank" href="https://artem-liamichev.github.io/russian-travel/index.html">
 
                        <span className='portfolio__list-item-name'>Traveling Across Russia</span>
                        <a className='portfolio__list-item link' target="_blank" href="https://artem-liamichev.github.io/russian-travel/index.html"><span className='portfolio__list-item-icon'></span></a>
                                                <span> The project is inspired by travels across Russia.
The project contains materials (photos and descriptions) about the main attractions for travelers.
English and Russian versions are available</span>
<p>
Flexbox,
Nested BEM,
Grid</p>

                    </div>
                </li>
                <li className='portfolio__list-item-container'>
                    <div className='portfolio__list-item' target="_blank" href="https://artem-liamichev.github.io/russian-travel/index.html">
 
                        <span className='portfolio__list-item-name'>Mesto</span>
                        <a className='portfolio__list-item link' target="_blank" href="https://artem-liamichev.github.io/russian-travel/index.html"><span className='portfolio__list-item-icon'></span></a>
                                                <span>An application with photos of favorite places. You can create your own profile, add photos, and select the ones you like the most. Includes the frontend and backend parts with the following features: user authorization and registration, operations with cards and users.</span>
<p>

React, Node.js
Express.js,
MongoDB</p>

                    </div>
                </li>
                <li className='portfolio__list-item-container'>
                    <div className='portfolio__list-item' target="_blank" href="https://artem-liamichev.github.io/russian-travel/index.html">
 
                        <span className='portfolio__list-item-name'>Go-to-travel.ru</span>
                        <a className='portfolio__list-item link' target="_blank" href="https://go-to-travel.ru/"><span className='portfolio__list-item-icon'></span></a>
                                                <span>Travel-tech platform for planning trips with tickets search. 
                                                 
                                                You can add your own trips, 
                                                upload tickets, add events, transport and accomodation to facilitate your travelling planning experience.</span>
<p>
 JavaScript, React, Redux
</p>

                    </div>
                </li>
                {/* <li className='portfolio__list-item-container'>
                    <a className='portfolio__list-item link' target="_blank" href="https://artem-liamichev.github.io/mesto/index.html">
                        <span className='portfolio__list-item-name'>Одностраничное приложение</span>
                        <span className='portfolio__list-item-icon'></span>
                    </a>
                </li> */}

            </ul>
    </section>  );
}

export default AboutMe;
