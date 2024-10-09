import React from 'react';
import ParticleEffect from './Title';

function TText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '3rem',
    textAlign: "Center",
    marginTop: '5rem'
    
  };
  return (
    <>
      {/* <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '7vw',
          width: '60vw',
          textAlign: 'center'
          
          
        }}
      >
        Machine Learning 
      </h1> */}
      <ParticleEffect text='Tech for Change' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
      <h2
        style={{
          position: 'absolute',
          top: '35vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center'

          
        }}
      >
        Gr 6-8 / Yr 7-9
      </h2>

      <div
        style={{
          position: 'absolute',
          top: '40vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'justify'
        }}
      >
        <h2 style={hS}>1. Tech4Change: Innovating for a Better Tomorrow</h2>
        <p style={{textAlign:"justify"}}>
            <strong>Overview:</strong> Tech4Change empowers students to address real-world problems using advanced technology. Participants will explore sustainable development goals (SDGs) and innovate through coding, designing, and prototyping with tools such as Pictoblox, HTML, Tinkercad, Minecraft, App Development, and Fusion 360.
        </p>

        <h2 style={hS}>2. Event Structure</h2>
        <p>
            <strong>Team Composition:</strong> Teams of 3-4 students from grades 6-8.
            <br /><br />
            Roles may include Developer, Designer, Researcher, and Project Manager.
        </p>

        <h2 style={hS}>3. Schedule</h2>
        <ul>
            <li><strong>Introduction & Problem Statement:</strong> Overview of the event and the problem scenario.</li><br />
            <li><strong>Design, Coding & Prototyping:</strong></li><br />
            <ul>
                <li><strong>Phase 1 (15 minutes)</strong>: Ideation and planning. Teams brainstorm, sketch, and outline their solutions.</li><br />
                <li><strong>Phase 2 (60 minutes)</strong>: Development. Teams code, design, and prototype their solutions using selected technologies.</li>
            </ul><br />
            <li><strong>Presentation & Demonstration:</strong> Each team presents and demonstrates their project to the judges (7 minutes per team, including Q&A). Presentations should cover problem understanding, the solution's development process, SDG impact, and technological integration.</li>
        </ul>

        <h2 style={hS}>4. General Guidelines</h2>
        <p>
            <strong>Eligibility:</strong> Open to students in grades 6, 7, and 8. 
            <br /><br />
            Programming knowledge required; beginners to intermediate levels welcome.
        </p>
        <p>
            <strong>Rules & Regulations:</strong>
            <ul>
                <li>All projects must be original.</li><br />
                <li>Teams may use external resources, provided they are cited properly.</li>
            </ul>
        </p>

        <h2 style={hS}>5. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" align='center'>
            <tr>
                <th>Criteria</th>
                <th>Description</th>
                <th>Points</th>
            </tr>
            <tr>
                <td>Problem Understanding</td>
                <td>Demonstrates clear understanding of the problem and SDG relevance.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Creativity & Innovation</td>
                <td>Displays originality in the approach and use of technology.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Technical Skills</td>
                <td>Complexity and proficiency in coding, designing, and prototyping.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>SDG Impact</td>
                <td>Potential impact of the solution on relevant SDGs.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Teamwork</td>
                <td>Collaboration and effective teamwork demonstrated.</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Presentation</td>
                <td>Clarity, confidence, and effectiveness in presentation.</td>
                <td>5</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td></td>
                <td><strong>50</strong></td>
            </tr>
        </table>

        <h2 style={hS}>6. Sample Challenges</h2>
        <p>
            <strong>Example Problem:</strong> Design an AI-driven app that helps reduce food wastage in school cafeterias, using Pictoblox for data collection and analysis.
            <br /><br />
            <strong>Solution Guide:</strong> Teams should integrate real-time data processing, a simple user interface for school staff, and AI models to predict food consumption patterns.
        </p>

        <h2 style={hS}>7. Resources and Tools</h2>
        <p>
            <strong>Development Tools:</strong><br />
            <ul>
                <li>Pictoblox for AI/ML integration.</li>
                <li>HTML editors like Brackets or Visual Studio Code.</li>
                <li>Tinkercad for 3D modeling.</li>
                <li>Minecraft Education for virtual SDG world-building.</li>
                <li>Fusion 360 for engineering prototypes.</li>
                <li>MIT App Inventor for app development.</li>
            </ul>
        </p>
        <p>
            <strong>Learning Modules:</strong><br />
            <ul>
                <li>Intro to AI with Pictoblox.</li>
                <li>Web Development with HTML and CSS.</li>
                <li>3D Design with Tinkercad.</li>
                <li>Minecraft for Social Good.</li>
            </ul>
        </p>

        <h2 style={hS}>8. Code of Conduct</h2>
        <p>
            <strong>Event Etiquette:</strong><br />
            <ul>
                <li>Participants should collaborate respectfully and maintain professionalism.</li>
                <li>Strict anti-plagiarism policy; violating this will result in disqualification.</li>
                <li>Time violations during project submission (missing the deadline) will result in penalties.</li>
            </ul>
        </p>

        
          

        
      </div>
    </>
  );
}

export { TText };
