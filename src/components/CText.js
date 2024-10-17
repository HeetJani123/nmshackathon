import React from 'react';
import ParticleEffect from './Title';

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
      {/* <h1
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
      </h1> */}
      <ParticleEffect text='Codalo' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
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
        Gr 9-10 / Yr 10-11
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
          textAlign: 'justify',
        }}
        
      >
        <h2 style={hS}>1. Overview</h2>
        <p style={{textAlign:"justify"}}>
         Get ready for an electrifying sumo robot battle! This competition offers young innovators the chance to dive into robotics and programming, blending creativity with STEM. Teams will design and build their own robots to face off in the ring, aiming to outsmart and push their opponents out. With two dynamic rounds—TITAN and ROBOT.IO—participants will showcase their engineering skills and teamwork, leading up to an epic final showdown where strategy and skill crown the ultimate champion!
          

          
        </p>

        <h2 style={hS}>2. Event Structure</h2>
        <p>
          <strong>Team Composition:</strong> Up to 6 members involved in programming and building the robot.
          <strong><br /><br />Each school can register a maximum of 1 Team.<br /></strong>
          

        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Participants must be in grades 9-10
          <br /><br />
          <strong>Registration:</strong> Teams must complete the online registration form by the specified deadline and submit all required documentation, including consent forms and project descriptions.
          <br /><br />
          <strong>Project Guidelines:</strong>
          <ul>
            <li>Projects must adhere to STEM-based themes provided for each round.</li>
            <li>All projects must be original and developed specifically for the Codalo competition.</li>
            <li>Teams must explain their project, including objectives and methodologies, during their presentation.</li>
          </ul>
        </p>

        <h2 style={hS}>4. Event Details</h2>
        <p style={{textAlign:"justify"}}>
          <strong>Round 1: TITAN</strong> - This is the first round of Codalo, during which all teams will present their robot designs to a panel of judges. Each team is required to prepare a presentation outlining their robot and its key features. Teams will be allotted 5 minutes for the presentation, followed by 2 minutes for a Q&A session with the judges. Evaluation will be conducted strictly according to the provided rubric. Additionally, bonus points (+5) will be awarded to teams whose robots address one or more of the Sustainable Development Goals (SDGs).
          <br /><br />
          <strong>Round 2: ROBOT.IO</strong> - The Robotic Battle Competition features teams of four members each, tasked with building robots using LEGO Spike or EV3 kits. Each match will be  for 2 minutes 30 seconds , where teams compete to score points by hitting their opponent's robot, earning one point per hit. Teams can also gain bonus points for successful defenses and creative robot designs, judged by a panel. All robots must be controlled remotely, adhering to safety protocols to prevent injury or damage. A judge will oversee each match, keeping track of time and scoring on a scoreboard that displays team names, points for hits and defenses, and overall scores.

        </p>

        <h2 style={hS}>5. Robot Specifications</h2>
        <table border="1" cellpadding="10" cellspacing="0" align="center">
          <tr>
              <th>Dimension</th>
              <th>Max Value</th>
          </tr>
          <tr>
              <td>Length</td>
              <td>30 cm</td>
          </tr>
          <tr>
              <td>Width</td>
              <td>16 cm</td>
          </tr>
          <tr>
              <td>Height</td>
              <td>15 cm</td>
          </tr>
          <tr>
              <td>Weight</td>
              <td>2 kg</td>
          </tr>
      </table>


        <h2 style={hS}>6. Rules and Code of Conduct</h2>
        <p>
          <strong>Equipment:</strong> Only Lego EV3 or Spike can be used to build the robots. Any modifications must be pre-approved by the organizers.
          <br /><br />
          <strong>Code of Conduct:</strong> All participants must display respect and sportsmanship. Unsportsmanlike behavior may lead to disqualification.
          <br /><br />
          <strong>Disqualification:</strong> Violations of rules, cheating, or inappropriate conduct will result in disqualification.
        </p>

        <h2 style={hS}>7. Evaluation Criteria</h2><br/>
        <h3 style={{textAlign:'center'}}><strong>ROUND 1</strong></h3><br/>
        <table border="1" cellpadding="10" cellspacing="0" align="center">
          <tr>
            <th>Criteria</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Creativity</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Uniqueness</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Teamwork</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Q&A Response</td>
            <td>25%</td>
          </tr>
        </table><br/><br/>
        <h3 style={{textAlign:'center'}}><strong>ROUND 2</strong></h3><br/>
        <table border="1" cellpadding="10" cellspacing="0" align='center'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Points Per Category (Maximum)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Push Out</td>
              <td>1 Point</td>
            </tr>
            <tr>
              <td>Durability</td>
              <td>5 Points</td>
            </tr>
            <tr>
              <td>Number of Fouls</td>
              <td>-5 Points</td>
            </tr>
            <tr>
              <td>Sportsmanship / Core Values</td>
              <td>5 Points</td>
            </tr>
          </tbody>
        </table><br/><br/>
        <h3><b>Rules and Criteria for Tie Breaker and Zero Points (with No Time Remaining)</b></h3>
        <ul>
          <li>In the event that both teams have zero points when time expires, the robot closest to the push-out line will be disqualified, and the opposing team or robot will advance to the next round.</li><br/>
          <li>For tie breakers, an additional 30 seconds will be allocated to the battle. If no points are scored during this extra time, the robot nearest to the push-out line will be disqualified, and the opposing team or robot will proceed to the next round.</li>
        </ul>


        
        <h2 style={hS}>Robot Reference Links</h2>
        <ul>
            <li><a href="https://youtu.be/La0KFxSwxyY?si=59XyuPeRFjhYiSDO" target="_blank">Robot Reference Video 1</a></li>
            <li><a href="https://youtu.be/y2HyhDMsc58?si=nyfS0Q0z8OFmLkYe" target="_blank">Robot Reference Video 2</a></li>
        </ul>

        <h2 style={hS}>FAQs</h2>
        <ul>
        <li>
            <span class="faq-question"><strong>What tools can we use?</strong></span>
            <p>
                Participants should ONLY USE LEGO EV3 OR SPIKE (or both together). They can code the controller in any program. 
                
            </p>
        </li>

        <li>
            <span class="faq-question"><strong>How will we submit our projects?</strong></span>
            <p>
                The submission of ROUND 1 presentations will be displayed on a smart board during the event.
            </p>
        </li>



        <li>
            <span class="faq-question"><strong>What is the Grade group for CODALO?</strong></span>
            <p>
                Grade 9, Grade 10, Year 10, Year 11.
            </p>
        </li>
      </ul>

      </div>
    </>
  );
}

export { CText };
