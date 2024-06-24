import React, { useEffect } from 'react';
import './Homepage.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HomepageBody from './HomepageBody';
import { NavbarAnimate } from '../utils/NavbarAnimate';
gsap.registerPlugin(ScrollTrigger);

function App() {
    NavbarAnimate();
    return (
        <div className="App">
            <div className="main">
                <HomepageBody/>
            </div>
        </div>
    );
}

export default App;
