import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="about-design">
            <div className="specific-part">
                <h2>Courses:</h2>
                <h4>Web Design</h4>
                <h4>App Design</h4>
                <h4>3D Design</h4>
                <h4>3D Animation</h4>
                <h4>Graphics Design</h4>
                <h4>Cyber Security</h4>
            </div>
            <div className="specific-part">
            <h2>Vision:</h2>
            <h6>Many languages do not use articles ("a," "an," and "the"), or if they do exist, the way they are used may be different than in English. Multilingual writers often find article usage to be one of the most difficult concepts to learn. Although there are some rules about article usage to help, there are also quite a few exceptions. Therefore, learning to use articles accurately takes a long time. To master article usage, it is necessary to do a great deal of reading, notice how articles are used in published texts, and take notes that can apply back to your own writing.</h6>
            </div>
            <div className="specific-part">
            <h2>Instructor:</h2>
                <h4>Web Design <span>From</span> BUET </h4>
                <h4>App Design <span>From</span> DU</h4>
                <h4>3D Design <span>From</span> JU</h4>
                <h4>3D Animation <span>From</span> DIU</h4>
                <h4>Graphics Design <span>From</span> Brack</h4>
                <h4>Cyber Security <span>From</span> IIT</h4>
            </div>
        </div>
    );
};

export default About;