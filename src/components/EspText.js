import React from 'react';

function EspText() {
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
        Esports
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
      >
      

        <h2 style={hS}>1. Esports Structure</h2>
        <p>
          <strong>Track:</strong> FC24 Kick Off Mode 1V1
          <br />
          <strong>Team Composition:</strong> No teams, only individual participation. You can choose any football club to play with except for Soccer Aid.
          <br />
          <br />
          <br />
          
          
        </p>

        <h2 style={hS}>2. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Open to high school in grades 9-12
          <br />
          <strong>Rules & Regulations:</strong> Decisions made by the in-game referee cannot be challenged. Players are not allowed more than two pauses per half. If you damage any equipment, you alone are liable to pay damages. Rematches will not happen unless in an emergency situation.
        </p>

        <h2 style={hS}>3. Evaluation Criteria</h2>
        <p>
          Matches will happen in a knockout bracket of 32 teams. Whoever wins the match moves on to the next round of the tournament.
        </p>

        <h2 style={hS}>5. Learning Resources</h2>
        <p>Basic Skills: Participants should know to play FIFA on console preferably on the PS4 or PS5.</p>

        <h2 style={hS}>6. Approach to the Esports tournament</h2>
        <p>
          <strong >Time Management:</strong> Allocate time for squad preparation.
          <br />
          <strong>Team Collaboration:</strong> No collaboration is allowed between opponents. Match fixing will result in immediate disqualification.
        </p>

        

        <h2 style={hS}>8. Mentorship and Support</h2>
        <p>
          <strong>Mentor Availability:</strong> Mentors will be available during the event through dedicated help desks.
          <br />
          
        </p>

        

        <h2 style={hS}>10. Code of Conduct</h2>
        <p>
          <strong>Event Etiquette:</strong> Maintain professionalism, respect teammates, and adhere to anti-violence policies.
          <br />
          <strong>Misconduct Penalties:</strong> Time violation and teams who restart without permission from organizers will be immediately disqualified.
        </p>

        <h2 style={hS}>11. FAQs</h2>
        <p>
          <strong>Which mode are we playing on and can I use any team?</strong><br /> The tournament will be played through the kick off mode and not ultimate team. Yes, you can use any team including nations except for Soccer Aid FC.
          <br />
          <strong>Is esports an individual or group event?</strong> The e-sports competition will be an individual only event. However, multiple teams can register from one school.
          <br />
          <strong>Will devices be provided?</strong> No, aside from consoles for e-sports, there will be no devices provided from our side.
          <br />
          <strong>Will restarting be allowed?</strong> Restarting an already started match will not be allowed under any circumstances.
          <br />
          <strong>Are we allowed setup time?</strong> Team selection and squad setup time is 1 minute and it will be timed.
        </p>
      </div>
    </>
  );
}

export { EspText };
