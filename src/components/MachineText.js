import React from 'react';

function MachineText() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '5vw',
          
        }}
      >
        Machine Learning 
      </h1>

      <div
        style={{
          position: 'absolute',
          top: '20vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left'
        }}
      >
        <h2>1. Introduction</h2>
        <p>
          <strong>Overview:</strong> This hackathon focuses on machine learning, where participants will work together to create a model capable of recognizing specific objects from a set of images. Participants will gather relevant images, train their models, and then test them on a hidden object within a final image. The goal is to design a model that accurately identifies the hidden object based on the best-chosen images. This event will foster creativity, teamwork, and problem-solving, making machine learning approachable and fun for beginners. 
          <br />Teams will be introduced to simple machine learning techniques and challenged to apply them in a hands-on way. By the end of the event, participants will have gained practical experience in image-based model training and collaborative coding, enhancing both their technical and teamwork skills.
        </p>

        <h2>2. Event Structure</h2>
        <p>
          <strong>Challenge Focus:</strong> Machine learning for object detection using images.
          <br />
          <strong>Team Composition:</strong> Teams of 4, with roles that may include a developer, data handler, researcher, and presenter.
          <br />
          <strong>Event Timing:</strong> 
          <br />9:30 AM: Introduction & Briefing 
          <br />9:45 AM: Image training session begins 
          <br />10:30 AM: Testing session begins
        </p>

        <h2>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Open to high school students aged 16–18 with beginner to intermediate machine learning knowledge.
          <br />
          <strong>Rules & Regulations:</strong> Teams must use original work and are allowed to use external resources, provided they cite them properly. Participants will submit their model, trained on selected images, along with documentation. Proper documentation of the model training process is required for evaluation.
        </p>

        <h2>4. Evaluation Criteria</h2>
        <p>
          <strong>Criteria</strong>:
          <br />Model Accuracy: 40%
          <br />Quality of Image Selection: 20%
          <br />Efficiency of Model: 15%
          <br />Presentation & Explanation: 15%
          <br />Proper Documentation: 10%
        </p>

        <h2>5. Sample Challenges</h2>
        <p>
          <strong>Challenge:</strong> Train a model to detect a hidden object from an image. Participants will gather relevant images, train their model, and the model that most accurately identifies the hidden object wins.
        </p>

        <h2>6. Learning Resources</h2>
        <p>
          <strong>Basic Skills:</strong> Familiarity with basic coding concepts, image handling, and using tools for building models.
          <br />A simple tool or platform will be provided to assist participants in training and submitting their models.
        </p>

        <h2>7. Approach to the Hackathon</h2>
        <p>
          <strong>Time Management:</strong> 
          <br />First 15 minutes: Initial setup briefing 
          <br />Next 45 minutes: Image collection and model training 
          <br />Final 30 minutes: Model submission and testing
        </p>

        <h2>8. Resources and Tools</h2>
        <p>
          <strong>Development Tools:</strong> Participants will have access to a platform for model training. The platform will support image uploading, model building, and submission.
        </p>

        <h2>9. Awards and Recognition</h2>
        <p>
          <strong>Prizes:</strong> 
          <br />1st place: Gadgets + certificates
          <br />2nd place: Gadgets + certificates
          <br />3rd place: Certificates
          <br />Recognition for all participants and potential internships for top performers.
        </p>

        <h2>10. Important Dates and Deadlines</h2>
        <p><strong>Key Dates:</strong> Registration closes and event dates will be announced soon.</p>

        <h2>11. Code of Conduct</h2>
        <p>
          <strong>Event Etiquette:</strong> Teams must maintain professionalism throughout the event. Plagiarism will lead to disqualification.
          <br />
          <strong>Penalties:</strong> Late submissions or failure to follow the format may result in point deductions.
        </p>

        <h2>12. FAQs</h2>
        <p>
          <strong>What tools can we use?</strong> The platform provided will support image uploading and model training.
          <br />
          <strong>How will we submit our projects?</strong> The submission process will be shared during the event, with specific guidelines to follow.
        </p>
      </div>
    </>
  );
}

export { MachineText };
