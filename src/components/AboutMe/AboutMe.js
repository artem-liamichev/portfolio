import React from 'react';

function AboutMe() {

  return (
    <section className="about-me" id="student">
        <h2 className="about-me__title">About me</h2>
        <div className='about-me__content'>
            <div className="about-me__bio">
                <h3 className='about-me__subtitle'>Artem Liamichev</h3>
                <p className='about-me__description'>Frontend developer, 32 y.o.</p>
                <p className='about-me__text'>Software developer particularly focusing on Web (React, Vue) with the background in industrial control systems (PLC programming, HMI design, and project management).
<br/>Since 2022, I have been into web development. Currently working in health-tech startup in Satiago, Chile.
<br/>I like to listen to music and I'm also fond of running. Recently I ran my first half-marathon.</p>
                <a className="about-me__link link" href="https://github.com/artem-liamichev" rel="noreferrer" target="_blank">GitHub</a>
            </div>
            <div className="about-me__photo"></div>
        </div>
    </section>  );
}

export default AboutMe;
