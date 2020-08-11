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
          I am a learning coder/web developer based in Sacramento, California.
          Originally from Wisconsin, I moved to California in 2008 and grew
          roots by purchasing a home and starting a family. I've spent the last
          twelve years in the Hospitality industry as a high level manager, but
          am pursuing a passion that I had put to rest early on in college.
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
