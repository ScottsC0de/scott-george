import React from 'react';

import PicOfMe from '../img/me.jpg'

function AboutMe() {
    return (
        <div>
            <h2>About Scott</h2>
            <br />
            <figure className='figure'>
                <img src={PicOfMe} class='figure-img img-fluid rounded' alt="A fantastic pic of me" width={500} height={500}></img>
                <figcaption class="figure-caption text-xs-right"> 27 year old full-stack web developer and musician with a passion for execellence</figcaption>
            </figure>
            <br />
            <p> Freshly graduated from the <a href='https://media.trilogyed.com/UConn/coding/uconn_curriculum_overview_fullstackflex_pt.pdf' target='_blank' rel='noreferrer'>UConn Coding Bootcamp</a>, I am ready to start my WebDev career.</p>
            <p>
                Please, stay awhile & check out my work using the NavBar up top.
            </p>
        </div>
    );
};

export default AboutMe;