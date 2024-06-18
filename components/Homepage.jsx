import React, { useEffect } from 'react';
import './Homepage.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from('nav h1', {
            y: -40,
            opacity: 0,
            delay: 0.2,
            duration: 0.3
        });
        tl.from('nav h4, nav button', {
            y: -40,
            opacity: 0,
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1
        });

        tl.from('#center-part1 h1', {
            x: -200,
            opacity: 0,
            duration: 0.6
        });
        tl.from('#center-part1 p', {
            x: -100,
            opacity: 0,
            duration: 0.5
        });
        tl.from('#center-part1 button', {
            opacity: 0,
            duration: 0.4
        });

        tl.from('#center-part2 img', {
            opacity: 0,
            duration: 0.5,
            x: 200
        });
    }, []);

    return (
        <div className="App">
            <div className="main">
                <section className="section1">
                    <nav>
                        <div className="flex items-center justify-center gap-12">
                            <img src="https://i.pinimg.com/564x/cf/08/06/cf0806ddc86a53db9557eccaf28f5951.jpg" alt="Logo" className="logo" />
                            <h1 className="voteup-text">VoteUp</h1>
                        </div>
                        <div id="part2" className="flex items-center justify-center gap-12">
                            <button className="nav-button about-us font-bold text-lg"><h4>About Us</h4></button>
                            <button className="nav-button services font-bold text-lg"><h4>ELECTION NEWS</h4></button>
                            <button className="nav-button contact-us font-bold text-lg"><h4>RULES & REGULATIONS</h4></button>
                            <button className="login-button border-2 border-blue-900 text-lg font-bold">Sign Up</button>
                        </div>
                    </nav>
                    <div className="center">
                        <div id="center-part1">
                            <h1>Your perfect site to visit during <span className="orange">ele</span><span className="blue">cti</span><span className="green">ons</span></h1>
                            <p>Welcome to VoteUp, your digital platform for democratic engagement. At VoteUp, we empower voters above 18 years to voice their opinions on elections. You can share their perspectives on political parties you've voted for, contributing to real-time exit polls. Join us in shaping the future of democracy through informed and inclusive voting insights.</p>
                            <button className="Register">REGISTER FOR EXIT POLL</button>
                        </div>
                        <div id="center-part2">
                            <img className="i" src="https://i.pinimg.com/564x/37/33/98/3733985f86e1cbd0381f8b61b5c92cf9.jpg" />
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <p>&copy; 2024 VoteUp. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
