import React, { useEffect } from 'react';
import './Homepage.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HomepageBody from './HomepageBody';
import { NavbarAnimate } from '../utils/NavbarAnimate';
import { homepageanimate } from '../utils/homepageanimate';
gsap.registerPlugin(ScrollTrigger);

function App() {
    NavbarAnimate();
    homepageanimate();
    return (
        <div className="App">
            <div className="main">
                <HomepageBody/>
            </div>
        </div>
    );
}

export default App;
