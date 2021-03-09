import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import './Attorneys.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Attorneys () {
    return (

        <div className="attorneys-background">


            <div className="phoenix-w"> 
                <h1>Phoenix Wright</h1>
                <p>Phoenix is an awesome layer!</p>
                <div className="phoenix">
                </div>
            </div>
            
            <div className="mia-f"> 
                <h1>Mia Fey</h1>
                <p>Taught Phoenix everything he knows!</p>
                <div className="mia">
                </div>
            </div>


        </div>  
    )
}

export default Attorneys;