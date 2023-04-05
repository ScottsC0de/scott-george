import React, { useState } from 'react';

function Portfolio() {
    return (
        <div>

            <section className='main-project'>
                <h2>My Work</h2>
                <hr />

                <p><strong><em>7 projects; 1 live site, 6 videos</em></strong></p>

                <h3>Elite Matchups</h3>
                <img>
                    <a href='https://elite-matchups.herokuapp.com'></a>
                </img>

            </section>

            <section className='projects'>

                <h3>Social Media API</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_9QMaGcVVWM" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

            <section className='projects'>

                <h3>E-Commerce Back-End</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/suPdpcR-5OY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

            <section className='projects'>

                <h3>SQL Database Tracker</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jJTQS-aa_f0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

            <section className='projects'>

                <h3>myTeam App</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JoxPK37G1w0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

            <section className='projects'>

                <h3>ReadMe Machine</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FiDq-eSe_e0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

            <section className='projects'>

                <h3>The Venue</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SAl53Z5xNDk" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            </section>

        </div>
    )
};






// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption,
// } from 'reactstrap';

// const items = [
//     {
//         id: 1,
//         altText: 'Matchup App using HTML, CSS, & JS',
//         caption: 'Elite Matchups',
//     },
//     {
//         id: 2,
//         altText: 'MongoDB data storage & retrieval',
//         caption: 'Social Media API',
//     },
//     {
//         id: 3,
//         altText: 'Database communication using Sequelize',
//         caption: 'E-Commerce Back-End',
//     },
//     {
//         id: 4,
//         altText: 'Track database items using mySQL',
//         caption: 'SQL Database Tracker',
//     },
//     {
//         id: 5,
//         altText: 'Generate HTML page using node.js & inquirer npm',
//         caption: 'myTeam App',
//     },
//     {
//         id: 6,
//         altText: 'Generate ReadMe files using node.js & inquirer npm',
//         caption: 'ReadMe Machine',
//     },
// ];

// function Portfolio(props) {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);

//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     };

//     const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     };

//     const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//     };

//     const slides = items.map((item) => {
//         return (
//             <CarouselItem
//                 className="custom-tag"
//                 tag="div"
//                 key={item.id}
//                 onExiting={() => setAnimating(true)}
//                 onExited={() => setAnimating(false)}
//             >
//                 <CarouselCaption
//                     className="text-danger"
//                     captionText={item.altText}
//                     captionHeader={item.caption}
//                 />
//             </CarouselItem>
//         );
//     });

//     return (
//         <div>
//             <style>
//                 {`.custom-tag {
//               max-width: 100%;
//               height: 500px;
//               background: black;
//             }`}
//             </style>
//             <h2 className='section-headers'>My Work</h2>
//             <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//                 <CarouselIndicators
//                     items={items}
//                     activeIndex={activeIndex}
//                     onClickHandler={goToIndex}
//                 />
//                 {slides}
//                 <CarouselControl
//                     direction="prev"
//                     directionText="Previous"
//                     onClickHandler={previous}
//                 />
//                 <CarouselControl
//                     direction="next"
//                     directionText="Next"
//                     onClickHandler={next}
//                 />
//             </Carousel>
//         </div>
//     );
// }

// carousel code found at https://reactstrap.github.io/?path=/docs/components-carousel--carousel 

export default Portfolio;