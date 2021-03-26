import { useEffect } from 'react'

import { Link } from 'react-router-dom'

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import undraw_diet_ghvw from '../../svg/undraw_diet_ghvw.svg'

import "./Home.css"

import nutrition from '../../images/nutrition-1.JPG'
import weight1 from '../../images/weight-1.JPG'
import weight2 from '../../images/weight-2.JPG'


gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        gsap.fromTo('.section2__content', { y: '+=100', opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'easeInOut', scrollTrigger: {
                trigger: '.home__section2',
                start: 'top 60%',
            }
        });

        gsap.fromTo('.section3__content', { y: '+=100', opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'easeInOut', scrollTrigger: {
                trigger: '.home__section3',
                start: 'top 60%',
            }
        });

        gsap.fromTo('.section4__content', { y: '+=100', opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'easeInOut', scrollTrigger: {
                trigger: '.home__section4',
                start: 'top 60%',
            }
        });

        gsap.fromTo('.section5__content', { y: '+=100', opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: 'easeInOut', scrollTrigger: {
                trigger: '.home__section5',
                start: 'top 60%',
            }
        });
    }, [])


    return (
        <div className="home">
            <div className="home__section1">
                <div className="section1__content">
                    <h1>Diet Tracker</h1>
                    <h3>Here to help you in Your diet journey.</h3>
                </div>
            </div>
            <div className="home__section2">
                <div className="section2__content">
                    <div className="section2__text">
                        <h2>Track your weight</h2>
                        <h5>Keep track of your weight, that is the best way to stay motivated in the dieting process!</h5>
                    </div>
                    <div className="section2__image">
                        <img src={weight1} alt="weight-functionality-showcase-1" />
                    </div>
                </div>
            </div>
            <div className="home__section3">
                <div className="section3__content">
                    <div className="section3__image">
                        <img src={weight2} alt="weight-functionality-showcase-2" />
                    </div>
                    <div className="section3__text">
                        <h2>See your progress</h2>
                        <h5>Graph to help you visualize your diet journey!</h5>
                    </div>
                </div>
            </div>
            <div className="home__section4">
                <div className="section4__content">
                    <div className="section4__image">
                        <img src={nutrition} alt="nutrition-functionality-showcase-1" />
                    </div>
                    <div className="section4__text">
                        <h2>Track your meals and nutrition</h2>
                        <h5>Keep track of your daily nutrition totals!</h5>
                    </div>
                </div>
            </div>
            <div className="home__section5">
                <div className="section5__content">
                    <div className="section5__text">
                        <h1>Try it now!</h1>
                        <img src={undraw_diet_ghvw} alt="diet-person" />
                        <Box mt={4}>
                            <Link to="/dashboard">
                                <Button
                                    variant="contained"
                                    color="primary"
                                >Go to your Dashboard</Button>
                            </Link>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
