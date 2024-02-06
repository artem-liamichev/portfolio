import React from 'react';

function Techs() {

  return (
    <section className="techs" id="techs">
        <h2 className="techs__title">Tech stack</h2>
        <div className="techs__content">
            <h3 className='techs__subtitle'>8 technologies</h3>
            <p className='techs__text'>
I have a demonstrated history of working with the following technologies.</p>
        </div>  
        <ul className='techs__list'>
            <li className='techs__list-item'>HTML</li>
            <li className='techs__list-item'>CSS</li>
            <li className='techs__list-item'>JS</li>
            <li className='techs__list-item'>React</li>
            <li className='techs__list-item'>Vue</li>
            <li className='techs__list-item'>Node.js</li>
            <li className='techs__list-item'>Express.js</li>
            <li className='techs__list-item'>mongoDB</li>
        </ul>
    </section>  );
}

export default Techs;
