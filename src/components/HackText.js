import React from 'react';

function HackText() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '8vw',
        }}
      >
        HACKATHON
      </h1>

      {/* Track 1 Section */}
      <div
        style={{
          position: 'absolute',
          top: '25vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          width: '60vw',
          color: 'white',
        }}
      >
        <h2>TRACK 1</h2>
        <h3>1. Introduction to Hackathon</h3>
        <p>
          Overview: The Hackathon tests participants’ ability to solve real-world challenges. Competitors will showcase their knowledge in their respective programming languages, applying them to problems that mirror industry demands. The focus is on creativity and practical application, pushing to build innovative solutions. Participants will enhance their problem-solving abilities.
        </p>
        <p>
          Objectives: Encourage innovation, problem-solving, and logical thinking, and help participants develop real-world technical skills.
        </p>

        <h3>2. Hackathon Structure</h3>
        <p>
          Solo participation <br />
          Schedule: The event starts at 9:30 AM to 12 AM with 3 different levels progressively increasing the marks and difficulty: Level 1 (40 mins), Level- 2(50 mins), Level 3(45 mins)
        </p>

        <h3>3. General Guidelines</h3>
        <p>
          Eligibility: Open to high school students (Grade 11 and 12) with prior knowledge of programming <br />
          Submission: Submit projects via GitHub in .zip format or any other verified alternatives with documentation.<br />
          Time: Make sure to submit on time (wrong format submissions or late submissions won’t be accepted)
        </p>

        <h3>4. Evaluation Criteria</h3>
        {/* Add criteria content here */}

        <h3>6. Sample Question</h3>
        <p>
          Q. Text Justification <br />
          Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
          {/* Add more details about the question */}
        </p>

        <h3>7. Learning Resources</h3>
        <p>
          Basic Skills: Participants can know Python, C++, C, Java, or any other preferred languages (specify in the registration forms)
        </p>

        <h3>9. Approach to the Hackathon</h3>
        <p>Time Management: Try every question but write efficient code for a question you are confident about.</p>

        <h3>10. Resources and Tools</h3>
        <p>Participants can use any valid IDE for their code.</p>

        <h3>11. Awards and Recognition</h3>
        {/* Add awards content */}

        <h3>12. Support</h3>
        <p>Volunteers will be available during the event through help desks and designated rooms.</p>

        <h3>13. Important Dates and Deadlines</h3>
        <p>Make sure to register before the deadline.</p>

        <h3>14. Code of Conduct</h3>
        <p>Maintain professionalism, respect participants and volunteers, and adhere to anti-plagiarism policies.</p>

        <h3>15. FAQs</h3>
        <p>Answers to common questions, including submission process, judging criteria, and rules for the Hackathon.</p>
      </div>

      {/* Track 2 Section */}
      <div
        style={{
          position: 'absolute',
          top: '150vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          width: '60vw',
          color: 'white',
        }}
      >
        <h2>TRACK 2</h2>
        <h3>1. Introduction to Subevent</h3>
        <p>
          Overview: This part of the hackathon assesses participants' skills in designing and coding Arduino-based solutions using Tinkercad, focusing on practical problem-solving and technical proficiency.
        </p>

        <h3>2. Event Structure</h3>
        <p>
          Work Period: Participants will have a set amount of time to work on the tasks using Tinkercad for circuit design and C++ code for Arduino.
        </p>

        <h3>3. General Guidelines</h3>
        <p>
          Eligibility: Open to high school students (Grade 9 and 10), beginner to intermediate C++ Arduino skills.<br />
          Submission: Submit tasks via the provided forms link.
        </p>

        <h3>4. Evaluation Criteria</h3>
        <p>Flow of the circuit design, accuracy of the code, fulfillment of component usage, and overall project functionality.</p>

        <h3>6. Sample Challenges</h3>
        <p>
          Task 1: Design an Arduino-controlled robotic system that moves forward and responds to objects detected by a distance sensor with various behaviors.
          {/* Add more challenge details */}
        </p>

        <h3>7. Learning Resources/ Tools</h3>
        <p>
          Basic Skills: Participants should know C++, various component functionalities, and familiarize themselves with Tinkercad and Arduino.
        </p>

        <h3>9. Approach to the Hackathon</h3>
        <p>Time Management: Properly manage time between coding, designing, and testing the circuit.</p>

        <h3>11. Awards and Recognition</h3>
        {/* Add awards content */}

        <h3>12. Mentorship and Support</h3>
        <p>Mentors/volunteers will be available during the event.</p>

        <h3>13. Important Dates and Deadlines</h3>
        {/* Add important dates */}

        <h3>14. Code of Conduct</h3>
        <p>Maintain professionalism and adhere to anti-plagiarism policies.</p>

        <h3>15. FAQs</h3>
        <p>Answers to common questions about the event structure, submission process, and rules for the Arduino subevent.</p>
      </div>
    </>
  );
}

export {HackText};
