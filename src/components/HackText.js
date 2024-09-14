import React from 'react';

function HackText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '5rem',
    textAlign: "Center",
    
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
          width: '60vw',
          textAlign: 'center'
        }}
      >
        HACKATHON
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
        Grades 9-12
      </h2>
      
      <div
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left'
        }}
      ><h2 style={hS}>TRACK 1</h2>
        <h2 style={hS}>1. Introduction to Hackathon</h2>
       
        <p>
          <strong>Overview:</strong> The Hackathon tests participants’ ability to solve real-world challenges. Competitors will showcase their knowledge in their respective programming languages, applying them to problems that mirror industry demands. The focus is on creativity and practical application, pushing to build innovative solutions. Participants will enhance their problem-solving abilities.
          <br />
        
        
         
          <strong>Objectives: </strong>Encourage innovation, problem-solving, and logical thinking, and help participants develop real-world technical skills.
          <br />
          <br />
        </p>

        <h2 style={hS}>2. Hackathon Structure</h2>
        
        <p>
          Solo participation <br />
          Schedule: The event starts at 9:30 AM to 12 AM with 3 different levels progressively increasing the marks and difficulty: Level 1 (40 mins), Level- 2(50 mins), Level 3(45 mins)
          <br />
          <br />
        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          

          Eligibility: Open to high school students (Grade 11 and 12) with prior knowledge of programming <br />
          Submission: Submit projects via GitHub in .zip format or any other verified alternatives with documentation.<br />
          Time: Make sure to submit on time (wrong format submissions or late submissions won’t be accepted)
          <br />
          <br />
        
        </p>


        <h2 style={hS}>4. Evaluation Criteria
        <ul>
           <li><strong>Problem understanding:</strong> 10%</li>
           <li>Second item</li>
           <li>Third item</li>
        </ul>
        </h2>
        

        <h2 style={hS}>6. Sample Question</h2>
        <p>
          <br />
          Q. Text Justification <br />
          Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
          {/* Add more details about the question */}
          <br />
          <br />
        
        </p>

        <h2 style={hS}>7. Learning Resources</h2>
        <p>
          <br />
          Basic Skills: Participants can know Python, C++, C, Java, or any other preferred languages (specify in the registration forms)
          <br />
          <br />
        
        </p>



        <h2 style={hS}>8. Approach to the Hackathon</h2>
        <p>
           <br />
           Time Management: Try every question but write efficient code for a question you are confident about.
           <br />
           <br />
      
        </p>

        <h2 style={hS}>9. Resources and Tools</h2>
        <p>Participants can use any valid IDE for their code.
           <br />
           <br />
        </p>


        <h2 style={hS}>11. Awards and Recognition</h2>
        {/* Add awards content */}

        <h2 style={hS}>12. Support</h2>
        <p>Volunteers will be available during the event through help desks and designated rooms.
        <br />
        <br />
        </p>

        <h2 style={hS}>13. Important Dates and Deadlines</h2>
        <p>Make sure to register before the deadline.
          <br />
        <br />
        </p>

        <h2 style={hS}>14. Code of Conduct</h2>
        <p>Maintain professionalism, respect participants and volunteers, and adhere to anti-plagiarism policies.
        <br />
        <br />
        </p>

        <h2 style={hS}>15. FAQs</h2>
        <p>Answers to common questions, including submission process, judging criteria, and rules for the Hackathon.</p>
      </div>

      {/* Track 2 Section */}
      <div
        style={{
          position: 'absolute',
          top: '550vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left'
        }}
      
        
      >
        <h2 style={hS}>TRACK 2</h2>
        <h2 style={hS}>1. Introduction to Subevent</h2>
        <p>
          Overview: This part of the hackathon assesses participants' skills in designing and coding Arduino-based solutions using Tinkercad, focusing on practical problem-solving and technical proficiency.
          <br />
          <br />
        </p>

        <h2 style={hS}>2. Event Structure</h2>
        <p>
          Work Period: Participants will have a set amount of time to work on the tasks using Tinkercad for circuit design and C++ code for Arduino.
          <br />
          <br />
        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          Eligibility: Open to high school students (Grade 9 and 10), beginner to intermediate C++ Arduino skills.<br />
          Submission: Submit tasks via the provided forms link.
          <br />
          <br />
        </p>

        <h2 style={hS}>4. Evaluation Criteria</h2>
        <p>Flow of the circuit design, accuracy of the code, fulfillment of component usage, and overall project functionality.
        <br />
        <br />
        </p>

        <h2 style={hS}>6. Sample Challenges</h2>
        <p>
          Task 1: Design an Arduino-controlled robotic system that moves forward and responds to objects detected by a distance sensor with various behaviors.
          {/* Add more challenge details */}
          <br />
          <br />
        </p>

        <h2 style={hS}>7. Learning Resources/ Tools</h2>
        <p>
          Basic Skills: Participants should know C++, various component functionalities, and familiarize themselves with Tinkercad and Arduino.
          <br />
          <br />
        </p>

        <h2 style={hS}>9. Approach to the Hackathon</h2>
        <p>Time Management: Properly manage time between coding, designing, and testing the circuit.
        <br />
        <br />
        </p>

        <h2 style={hS}>11. Awards and Recognition</h2>
        {/* Add awards content */}

        <h2 style={hS}>12. Mentorship and Support</h2>
        <p>Mentors/volunteers will be available during the event.
        <br />
        <br />
        </p>

       

        <h2 style={hS}>14. Code of Conduct</h2>
        <p>Maintain professionalism and adhere to anti-plagiarism policies.
        <br />
        <br />
        </p>

        <h2 style={hS}>15. FAQs</h2>
        <p>Answers to common questions about the event structure, submission process, and rules for the Arduino subevent.
        <br />
        <br />
        </p>
      </div>
    </>
  );
}

export {HackText};
