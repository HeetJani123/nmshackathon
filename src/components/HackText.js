import React from 'react';
import ParticleEffect from './Title';  // Assuming ParticleEffect is your custom component for the title effect

function HackText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '5rem',
    textAlign: "Center",
  };
  const hD = {
    fontSize: '3.5vw',
    color: '#FFC000', 
    marginBottom: '5rem',
    textAlign: "Center",
  };

  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '1.5vw',
    backgroundColor: '#44a1a0',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      {/* Main Hackathon Title */}
      <ParticleEffect text='Hackathon' cl={['#44a1a0', '#0d5c63', '#fffffa']} />

      <h2
        style={{
          position: 'absolute',
          top: '40vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center',
        }}
      >
        Grades 9-12
      </h2>

      {/* Buttons to Navigate to Track 1 and Track 2 */}
      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <a href="#track1">
          <button style={buttonStyle}>Track 1</button>
        </a>
        <a href="#track2">
          <button style={buttonStyle}>Track 2</button>
        </a>
      </div>

      {/* Track 1 Section */}
      <div
        id="track1"
        style={{
          position: 'absolute',
          top: '70vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={hS}>TRACK 1</h2>
        <h2 style={hS}>1. Introduction to Hackathon</h2>
        <p>
          <strong>Overview:</strong> The Hackathon tests participants’ ability to solve real-world challenges. Competitors will showcase their knowledge in their respective programming languages, applying them to problems that mirror industry demands. The focus is on creativity and practical application, pushing to build innovative solutions. Participants will enhance their problem-solving abilities.
          <br /><br />
        </p>

        <h2 style={hS}>2. Hackathon Structure</h2>
        <p>
          No teams, only individual participation. 
          <br />
          Eligibility: Open to high school students (Grade 11 and 12) with prior knowledge of programming.
          <br /><br />
        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          Submission: Submit projects via GitHub in .zip format or any other verified alternatives with documentation.
          <br />
          Time: Make sure to submit on time (wrong format submissions or late submissions won’t be accepted).
          <br /><br />
        </p>

        <h2 style={hS}>4. Evaluation Criteria</h2>
        <p>
          <ul>
            <li><strong>Problem understanding:</strong> 10%</li>
            <li><strong>Solution Design:</strong> 20%</li>
            <li><strong>Coding skills:</strong> 20%</li>
            <li><strong>Integration:</strong> 10%</li>
            <li><strong>Innovation:</strong> 20%</li>
            <li><strong>Adaptability:</strong> 20%</li>
          </ul>
          <br /><br />
        </p>

        <h2 style={hS}>5. Sample Question</h2>
        <p>
          Q. Text Justification: Given an array of strings and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.
          <br /><br />
        </p>

        <h2 style={hS}>6. Learning Resources</h2>
        <p>
          Basic Skills: Participants can use Python, C++, C, Java, or any other preferred languages.
          <br /><br />
        </p>

        <h2 style={hS}>7. Resources and Tools</h2>
        <p>
          Participants can use any valid IDE for their code.
          <br /><br />
        </p>

        <h2 style={hS}>8. Support</h2>
        <p>
          Volunteers will be available during the event through help desks and designated rooms.
          <br /><br />
        </p>

        <h2 style={hS}>9. Code of Conduct</h2>
        <p>
          Maintain professionalism, respect participants and volunteers, and adhere to anti-plagiarism policies.
          <br /><br />
        </p>

        <h2 style={hS}>10. FAQs</h2>
        <p>
          <strong>Q:</strong> Will the Hackathon have different rounds?
          <br />
          <strong>A:</strong> No, but the one round will be separated into different parts (level-1, level-2, level-3).
          <br /><br />
          <strong>Q:</strong> How do we submit the answers?
          <br />
          <strong>A:</strong> Submit projects via GitHub in .zip format or any other verified alternatives with documentation.
          <br /><br />
        </p>
      </div>

      {/* Track 2 Section */}
      <div
        id="track2"
        style={{
          position: 'absolute',
          top: '620vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'golden yellow',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={hD}>TRACK 2</h2>
        <h2 style={hD}>1. Overview</h2>
        <p>
          This part of the hackathon assesses participants' skills in designing and coding Arduino-based solutions using Tinkercad, focusing on practical problem-solving and technical proficiency.
          <br /><br />
        </p>

        <h2 style={hD}>2. Event Structure</h2>
        <p>
          Work Period: Participants will have a set amount of time to work on the tasks using Tinkercad for circuit design and C++ code for Arduino.
          <br /><br />
        </p>

        <h2 style={hD}>3. General Guidelines</h2>
        <p>
          Eligibility: Open to high school students (Grade 9 and 10), beginner to intermediate C++ Arduino skills.
          <br />
          Submission: Submit tasks via the provided forms link.
          <br /><br />
        </p>

        <h2 style={hD}>4. Evaluation Criteria</h2>
        <p>
          Flow of the circuit design, accuracy of the code, fulfillment of component usage, and overall project functionality.
          <br /><br />
        </p>

        <h2 style={hD}>5. Sample Challenges</h2>
        <p>
          Task 1: Design an Arduino-controlled robotic system that moves forward and responds to objects detected by a distance sensor with various behaviors.
          <br /><br />
        </p>

        <h2 style={hD}>6. Learning Resources/ Tools</h2>
        <p>
          Participants should know C++, component functionalities, and familiarize themselves with Tinkercad and Arduino.
          <br /><br />
        </p>

        <h2 style={hD}>7. Support</h2>
        <p>
          Volunteers will be available during the event.
          <br /><br />
        </p>

        <h2 style={hD}>8. Code of Conduct</h2>
        <p>
          Maintain professionalism and adhere to anti-plagiarism policies.
          <br /><br />
        </p>
      </div>
    </>
  );
}

export { HackText };
