import React from 'react';
import ParticleEffect from './Title';  
import { hover } from '@testing-library/user-event/dist/hover';

function HackText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '5rem',
    textAlign: "Center",
    marginTop: '5rem'
  };
  const hD = {
    fontSize: '3.5vw',
    color: '#FFC000', 
    marginBottom: '5rem',
    textAlign: "Center",
    marginTop: '5rem'
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
          <button style={buttonStyle}> <strong>TRACK 1</strong><br/>Grades 11-12</button>
        </a>
        <a href="#track2">
          <button style={buttonStyle}><strong>TRACK 2</strong><br/>Grades 9-10</button>
        </a>
      </div>

      {/* Track 1 Section */}
      <div
        id="track1"
        style={{
          position: 'absolute',
          top: '90vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={{
          fontSize: '3.5vw',
          color: 'cyan', 
          marginBottom: '1rem',
          textAlign: "Center",
          marginTop: '5rem'
        }}>TRACK 1</h2>
        
        <p style={{
          textAlign:"center",
          fontSize:"2vw"
        }}>
          Grades 11-12

        </p>
        <h2 style={hS}>1. Overview</h2>
        <p>
          <strong>Overview:</strong> The Hackathon tests participants’ ability to solve real-world challenges. Competitors will showcase their knowledge in their respective programming languages, applying them to problems that mirror industry demands. The focus is on creativity and practical application, pushing to build innovative solutions. Participants will enhance their problem-solving abilities.
          
        </p>

        <h2 style={hS}>2. Hackathon Structure</h2>
        <p>
          No teams, only individual participation. 
          <br />
          Eligibility: Open to high school students (Grade 11 and 12) with prior knowledge of programming.
          
        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          Submission: Submit projects via GitHub in .zip format or any other verified alternatives with documentation.
          <br />
          Time: Make sure to submit on time (wrong format submissions or late submissions won’t be accepted).
          
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
          
        </p>

        <h2 style={hS}>5. Sample Question</h2>
        <p>
          Q. Text Justification: Given an array of strings and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.
          
        </p>

        <h2 style={hS}>6. Learning Resources</h2>
        <p>
          Basic Skills: Participants can use Python, C++, C, Java, or any other preferred languages.
          
        </p>

        <h2 style={hS}>7. Resources and Tools</h2>
        <p>
          Participants can use any valid IDE for their code.
          
        </p>

        <h2 style={hS}>8. Support</h2>
        <p>
          Volunteers will be available during the event through help desks and designated rooms.
          
        </p>

        <h2 style={hS}>9. Code of Conduct</h2>
        <p>
          Maintain professionalism, respect participants and volunteers, and adhere to anti-plagiarism policies.
          
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
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left',
        }}
      >
        <h2 style={{
          fontSize: '3.5vw',
          color: '#FFC000', 
          marginBottom: '1rem',
          textAlign: "Center",
          marginTop: '5rem'
        }}>TRACK 2</h2>
        
        <p style={{
          textAlign:"center",
          fontSize:"2vw"
        }}>
          Grades 9-10

        </p>
        
        <h2 style={hD}>1. Overview</h2>
        <p>
          This part of the hackathon assesses participants' skills in designing and coding Arduino-based solutions using Tinkercad, focusing on practical problem-solving and technical proficiency.
          
        </p>

        <h2 style={hD}>2. Event Structure</h2>
        <p>
          <strong>FORMAT : Individual participation</strong><br/>
          Single round hackathon (2hr) difficulty Level for each questions will be progressive.
          <ul>
            <li><strong>Design:</strong> Participants must use Tinkercad to design and simulate their circuits. Must use all the components specified in each task.</li><br/>
            <li><strong>Code:</strong> Write and test Arduino code to implement the functionalities described in the tasks.</li><br/>
            <li><strong>Document (Optional):</strong>Prepare documentation that explains the design and code.</li><br/>
            <li><strong>NOTE:</strong> All tasks must be submitted through Tinkercad and must be functional at the time of evaluation</li><br/>
          </ul>
          
        </p>

        <h2 style={hD}>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Open to high school students (Grade 9 and 10), beginner to intermediate C++ Arduino skills.
          <br />
          <strong>Rules & Regulations:</strong>
          <ul>
            <li>Participants must use original work and are allowed to use external resources, provided they cite them properly.
            </li>
            <li>No use of any AI applications
            </li>
            <li>The format for submission will be shared during the event, and participants must follow the instructions carefully to ensure their submission is valid.</li>
            <li>Code must be in C++, no block coding is allowed</li>
          </ul>
          <strong>Submission:</strong> Submit tasks via the provided forms link.
          
        </p>

        <h2 style={hD}>4. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" >
        <thead>
            <tr>
                <th>Criteria</th>
                <th>Weightage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The flow of the circuit design on Tinkercad</td>
                <td>30%</td>
            </tr>
            <tr>
                <td>Accuracy of the code concerning a task</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>Fulfilment of using all the components in a task</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>The overall functionality of the Project</td>
                <td>20%</td>
            </tr>
        </tbody>
        </table>

        <h2 style={hD}>5. Sample Challenges</h2>
        <p>
          Task : Design an Arduino-controlled robotic system that moves forward and responds to objects detected by a distance sensor with the following behaviours:<br/>
          <ul>
            <li>Full Speed Movement: The robot should move forward at full speed when no object is detected within 100 cm.</li><br/>
            <li>Reduced Speed: If an object is detected within a distance of 60-100 cm, the robot should reduce its speed.</li><br/>
            <li>Stop and Alert: If an object is detected at a distance of less than 60 cm, the robot should come to a complete stop and activate a buzzer to alert the condition.</li><br/>
            
          </ul>
          Essential components:
          <ul>
            <li><strong>Arduino Board:</strong> Arduino Uno</li>
            <li><strong>Distance Sensor:</strong> Ultrasonic sensor (HC-SR04)</li>
            <li><strong>Motor Driver:</strong> Motor driver (L293D IC recommended)</li>
            <li><strong>DC Motors:</strong> DC motor with compatible motor driver in Tinkercad</li>
            <li><strong>Motor Wheels:</strong> Attached to the DC motors (simulate as part of the motor setup)</li>
            <li><strong>Buzzer:</strong> Buzzer (for sound alert)</li>
          </ul>

          
        </p>

        <h2 style={hD}>6. Learning Resources/ Tools</h2>
        <p>
          Participants should know C++, component functionalities, and familiarize themselves with Tinkercad and Arduino.
          
        </p>

        

        <h2 style={hD}>7. Code of Conduct</h2>
        <p>
          <ul>
            <li><strong>Event Etiquette:</strong> Maintain professionalism, respect teammates, and adhere to anti-plagiarism policies.
            </li>
            <li><strong>Misconduct Penalties:</strong> Code submission method, Time violation and etc Teams violating rules will face disqualification</li>
          </ul>
          
        </p>
        <h2 style={hD}>8. FAQs</h2>
        <p>
          
          
        </p>
      </div>
    </>
  );
}

export { HackText };
