import React from 'react';

function CText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '3rem',
    textAlign: "Center",
    marginTop: '5rem'
    
  };
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '7vw',
        }}
      >
        Codalo
      </h1>
      <h2
        style={{
          position: 'absolute',
          top: '30vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center'

          
        }}
      >
        Grades 9-10
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
          textAlign: 'left',
        }}
        
      >
        <h2 style={hS}>1. Overview</h2>
        <p>
          Codalo provides a platform for young students to engage with robotics,fostering collaboration, innovation, and global connectivity.
          Participants can showcase their ideas across three exciting rounds to inspire problem-solving and teamwork. 
          The event takes place in two rounds <strong>TITAN</strong> and <strong>ROBOT.IO</strong>.
        </p>

        <h2 style={hS}>2. TITAN: ROBOT DESIGN</h2>
        <p>
          The first round of Codalo will involve all the teams presenting their Robot Design to a panel of judges. 
          The team should have a presentation about their robot and its features. Each team will be allotted 5 minutes 
          for presentation and 2 minutes for Q&A from the judges. The teams will be graded ONLY according to the rubrics. 
          Bonus points (5 points) will be awarded if the robot helps solve any of the SDG goals.
        </p>

        <h2 style={hS}>3. ROBOT.IO: ROBOT BATTLE</h2>
        <p>
          This is the second round in which two teams, each with 4 members, will control the robot. 
          The battle involves the robot competing against another team’s robot. Each hit on the opponent's robot scores a point. 
          Each battle table will have a judge/timekeeper with a criteria board to mark the points/score. 
          The robot should be made using Lego Spike or EV3 and must be controlled externally by a remote control (digital or standard). 
          The robot’s size can be a maximum of:
        </p>
        <ul>
          <li>Length: 30 cm</li>
          <li>Width: 16 cm</li>
          <li>Height: 15 cm</li>
        </ul>

        <h2 style={hS}>4. Schedule</h2>
        <p>
          <strong>9:30 AM - 10:30 AM:</strong> Round 1 - TITAN (Robot Design)<br />
          <strong>10:30 AM - 10:45 AM:</strong> Prep Time for Round 2<br />
          <strong>10:45 AM - 11:45 AM:</strong> Round 2 - ROBOT.IO (Robot Battle)
        </p>

        <h2 style={hS}>5. Team Composition</h2>
        <p>
          Each team can have up to 4 members involved in programming and building the robot. 
          Teams must designate a team leader who will be the primary point of contact.
        </p>

        <h2 style={hS}>6. Registration</h2>
        <p>
          Teams must complete the online registration form by the specified deadline. 
          All required documentation, including consent forms and project descriptions, must be submitted with the registration.
          { /* Insert registration link here */ }
        </p>

        <h2 style={hS}>7. Project Guidelines</h2>
        <p>
          Projects must adhere to the STEM-based themes provided for each round. 
          All projects must be original and developed specifically for the CODALO competition. 
          Teams must provide a brief explanation of their project, including objectives and methodologies, in their presentation.
        </p>

        <h2 style={hS}>8. Equipment and Materials</h2>
        <p>
          Teams must use only Lego EV3 or Spike to build the robot. 
          Any modifications to the provided equipment must be preapproved by the organizers.
        </p>

        <h2 style={hS}>9. Code of Conduct</h2>
        <p>
          All participants must exhibit respect and sportsmanship toward other teams, judges, and organizers. 
          Any form of harassment or unsportsmanlike conduct will result in disqualification.
        </p>

        <h2 style={hS}>10. Judging Criteria</h2>
        <p>
          <ul>
            <li><strong>Creativity:</strong>25%</li>
            <li><strong>Uniqueness:</strong>25%</li>
            <li><strong>Team Work:</strong>25%</li>
            <li><strong>Question and Answer:</strong>25%</li>
            
            

          </ul>
          Projects will be judged based on the rubric criteria provided. Judges' decisions are final and cannot be appealed.
        </p>

        <h2 style={hS}>11. Disqualification</h2>
        <p>
          Teams may be disqualified for violating competition rules, cheating, or unsportsmanlike conduct. 
          Disqualified teams will not be eligible for awards or recognition.
        </p>

        <h2 style={hS}>12. Intellectual Property</h2>
        <p>
          All intellectual property rights for the projects remain with the participants. 
          The organizers reserve the right to use images and videos of projects for promotional purposes.
        </p>
        <h2 style={hS}>14. FAQs</h2>
        <p>
          
        </p>
      </div>
    </>
  );
}

export { CText };
