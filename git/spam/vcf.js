// VoteUp.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger separately

const VoteUp = () => {
    useEffect(() => {
        // GSAP animation timeline
        const tl = gsap.timeline();

        tl.from("nav h1", {
            y: -40,
            opacity: 0,
            delay: 0.2,
            duration: 0.3
        });
        tl.from("nav h4, nav button", {
            y: -40,
            opacity: 0,
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1
        });

        tl.from("#center-part1 h1", {
            x: -200,
            opacity: 0,
            duration: 0.6
        });
        tl.from("#center-part1 p", {
            x: -100,
            opacity: 0,
            duration: 0.5
        });
        tl.from("#center-part1 button", {
            opacity: 0,
            duration: 0.4
        });

        tl.from(".section1bottom img", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.6
        });

        // Ensure ScrollTrigger is used
        gsap.registerPlugin(ScrollTrigger);

        // Clean up GSAP ScrollTrigger on component unmount
        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    return (
        <div className="main">
            <section className="section1">
                <nav>
                    <div className="flex items-center justify-center gap-12">
                        <img src="https://i.pinimg.com/564x/cf/08/06/cf0806ddc86a53db9557eccaf28f5951.jpg" alt="Logo" className="logo" />
                        <h1 className="voteup-text">VoteUp</h1>
                    </div>
                    <div id="part2" className="flex items-center justify-center gap-12">
                        <button className="nav-button about-us font-bold text-bold"><h4>About Us</h4></button>
                        <button className="nav-button services font-bold text-lg"><h4>ELECTION NEWS</h4></button>
                        <button className="nav-button contact-us font-bold text-lg"><h4>RULES & REGULATIONS</h4></button>
                        <button className="login-button border-2 border-blue-900 text-lg font-bold">Sign Up</button>
                    </div>
                </nav>
                <div className="center">
                    <div id="center-part1">
                        <h1>About US</h1>
                        <p>At VoteUp, we believe in the power of informed and active participation in the democratic process. Our platform is designed to give voters a voice, enabling them to share their opinions and contribute to a collective understanding of electoral outcomes. By leveraging Aadhar authentication, we ensure that only those who have voted can provide feedback on the political parties they’ve supported. This innovative approach allows us to generate real-time exit polls, reflecting the true sentiments of the electorate. Join us in our mission to foster transparency and engagement in elections, making every vote count.</p>
                        <button className="Register">REGISTER FOR EXIT POLL</button>
                    </div>
                    <div id="center-part2" className="team-container">
                        <div className="team-member">
                            <img src="aki.jpg" alt="Ayush Kishor" />
                            <div className="details">
                                <a>Ayush Kishor</a>
                                <a href="mailto:ayushkishor307@gmail.com">ayushkishor307@gmail.com</a>
                                <a href="https://www.linkedin.com/in/ayush-kishor-b279a6287/">LinkedIn</a>
                                <a href="https://github.com/Ayushkishor12">GitHub</a>
                            </div>
                        </div>
                        {/* Add more team members here */}
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 VoteUp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default VoteUp;
// VoteUp.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './style.css'; // Import CSS styles

const VoteUp = () => {
    // useEffect and component JSX as shown in Step 1
};
// App.js

import React from 'react';
import VoteUp from './VoteUp';

function App() {
  return (
    <div className="App">
      <VoteUp />
    </div>
  );
}

export default App;
