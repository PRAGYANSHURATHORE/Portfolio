import React from "react";
import { useEffect } from "react";
import Typed from "typed.js";

function About() {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["Full-Stack Developer", "Front-End Developer", "Designer"],
      typeSpeed: 60,
      backSpeed: 45,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <section class="about" id="about">
      <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
          <div class="column ">
            <div class="text">
              I'm <b>Pragyanshu Rathore</b> , A Passionate{" "}
              <b>
                <span className="typed"></span>
              </b>
            </div>
            <p>
              with a strong foundation in web development and scalable
              application design. I recently completed my B.Tech in Computer
              Science and Engineering and have hands-on experience building and
              optimizing web applications.
            </p>
            <p>
              My work involves utilizing technologies like HTML5, CSS3,
              JavaScript, React, Node.js, SQL, and MongoDB to create responsive
              user interfaces and robust back-end systems. I focus on improving
              website performance, designing user-friendly interfaces, and
              developing maintainable, scalable applications.
            </p>
            <ul>
              I’ve also worked on exciting projects, such as:
              <li>
                <b>Portfolio Website:</b> A showcase of my skills, built using
                React.js, Node.js, HTML, and CSS.
              </li>
              <li>
                <b>Social Media Platform:</b> A React-based application with
                advanced features powered by Next.js, Tailwind CSS, and database
                management.
              </li>
            </ul>
            <a href="/pragyanshuresume.pdf" download="Pragyanshu_Resume.pdf">
              Download CV
            </a>
            <a
              href="/pragyanshuresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
