import React from "react";
import "./style.css";

function Profile() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <img
          src="assets/Images/trophy.png"
          className="floatLeft"
          alt="Ryan Skog"
          width="250px"
          height="250px"
        />
        <p className="text-dark">
          I am a Front-end Web Developer with a Bachelor’s Degree in Art from
          the University of Wisconsin. I also bring graduate training with focus
          in animation and visual effects. I am combining my strengths in art
          and development to create visually impactful websites. My bootcamp
          experience at UC Davis provided me with a Certificate in Full-Stack
          Web Development, along with the opportunity to collaborate on projects
          with other students, mentor, problem solve on the fly, and immerse
          myself in the web design experience. I aim to bring an artistic eye
          with an underlying understanding of code and development to bring to
          life high-quality web experiences.
          <br />
          <br />
          On this page you can find my current featured projects, support
          websites for budding developers, an updated resume, and contact
          information. I would be interested to hear about and participate in
          any project that might help me develop my skills and knowledge base.
          Feel free to reach out to me at any time.
        </p>
      </div>
    </div>
  );
}

export default Profile;
