import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Full-Stack Developer","Front-End Developer","Designer"],
      typeSpeed: 60,
      backSpeed: 45,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Pragyanshu Rathore</div>
          <div className="text-3">And I'm a <span className="typing"></span></div>
          <a href="mailto:rathorepragyanshu@gmail.com">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;