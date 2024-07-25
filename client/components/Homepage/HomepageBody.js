import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomepageBody = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/signup'); // Adjust the path to your actual signup route
    };

    return (
        <div className="center">
            <div id="center-part1">
                <h1>Your perfect site to visit during <span className="orange">ele</span><span className="blue">cti</span><span className="green">ons</span></h1>
                <p>Welcome to VoteUp, your digital platform for democratic engagement. At VoteUp, we empower voters above 18 years to voice their opinions on elections. You can share their perspectives on political parties you've voted for, contributing to real-time exit polls. Join us in shaping the future of democracy through informed and inclusive voting insights.</p>
                <button className="Register" onClick={handleRegisterClick}>REGISTER FOR EXIT POLL</button>
            </div>
            <div id="center-part2">
                <img className="i" src="https://i.pinimg.com/564x/37/33/98/3733985f86e1cbd0381f8b61b5c92cf9.jpg" alt="Election"/>
            </div>
        </div>
    );
}

export default HomepageBody;
