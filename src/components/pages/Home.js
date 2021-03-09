import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import './Home.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
    return (
        <div className="home-background">

            <div className="box-one">This is where we put something interesting to make the client more interested in our firm</div>
       
            {/* <Router>     
                <HeroSection />
            </Router> */}

        </div>
        

    )
}

export default Home;