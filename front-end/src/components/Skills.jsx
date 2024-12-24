import React from "react";

function Skills() {
  return (
    <section class="skills" id="skills">
      <div class="max-width">
        <h2 class="title">My skills</h2>
        <div class="skills-content">
          <div class="column">
            <p>
              A solid background in full-stack development with experience in
              building responsive front-end designs and reliable back-end
              systems. Skilled in using modern frameworks, programming
              languages, and database tools to create practical solutions for
              various web development needs.
            </p>
          </div>
          <div class="column down">
            <details open>
              <summary>Front-End</summary>
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span>80%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span>75%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>React.js</span>
                  <span>85%</span>
                </div>
                <div class="line react"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Tailwind CSS</span>
                  <span>60%</span>
                </div>
                <div class="line tailwind"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Bootstrap</span>
                  <span>60%</span>
                </div>
                <div class="line bootstrap"></div>
              </div>
            </details>
            <details open>
              <summary>Back-End</summary>
              <div class="bars">
                <div class="info">
                  <span>Node.js</span>
                  <span>70%</span>
                </div>
                <div class="line node-js"></div>
              </div>
              <div class="bars">
              <div class="info">
                <span>Express.js</span>
                <span>75%</span>
              </div>
              <div class="line express"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Next.js</span>
                <span>65%</span>
              </div>
              <div class="line next-js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Socket.io</span>
                <span>50%</span>
              </div>
              <div class="line socket"></div>
            </div>
            </details>
            <details open>
              <summary>Databases</summary>
              <div class="bars">
                <div class="info">
                  <span>MySQL</span>
                  <span>70%</span>
                </div>
                <div class="line mysql"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>MongoDB</span>
                  <span>60%</span>
                </div>
                <div class="line mongodb"></div>
              </div>
            </details>
            <details open>
              <summary>Programming Languages</summary>
              <div class="bars">
                <div class="info">
                  <span>C++</span>
                  <span>70%</span>
                </div>
                <div class="line c"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Python</span>
                  <span>60%</span>
                </div>
                <div class="line python"></div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
