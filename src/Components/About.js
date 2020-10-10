import React from 'react';
import aboutImage from "../images/profilepic.jpg"

function About ()  {
    return (
      <section id="about">
      <div className="row">
         <div className="six columns main-col col text-center">
            <h2>ABOUT ME</h2>
            <div className="aboutInfo">
              <p>I have a passion for people and telling diverse stories that reflect both our unique and shared experiences. I've spent the last ten years working with clients to create authentic and compelling broadcast, digital and branded content that resonates with general market and multicultural audiences.</p>
            <p>I'm currently enrolled in an intensive MERN Stack Coding Bootcamp at UCLA, UX Design Programs through Udacity and General Assembly, and a Digital Product Management Specialization through UVA Darden School of Business. My goal is to acquire the skills needed to manage the development process of polished, fully responsive and interactive digital products that drive user engagement.</p>
            <p>When I'm not working or trying to learn something new, I most recently can be found in my garden, cooking, or walking my dog around the neighborhood. I'm anxiously awaiting when I can go to concerts and travel abroad again!</p>
            </div>
            </div>
            <div className="six columns">
            <img className="profile-pic"  src={aboutImage} alt="Briana daMota Profile Pic" />
         </div>
         </div>
   </section>
    );
  }


export default About;
