import React, { useState, useEffect } from "react";
import ParticleEffect from "../components/Title";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const eventDate = new Date("November 19, 2024 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft("Event Started!");
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="/credits">Credits</a>
        <a href="https://forms.google.com" className="register-btn" style={{marginLeft: '80vw'}}>Register Now</a>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/2024.png" alt="Hackathon Logo" />
          <div>
        <ParticleEffect text={"Magnificus Concurus"} />
      </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <h2>About</h2>
        <p>
          Magnificus Concursus is a first-of-its-kind hackathon held by GNMS, on Tuesday, 19th November,
          dedicated to fostering practical coding and problem-solving expertise. It’s a single-day hackathon, 
          a great opportunity for students to learn new skills, meet other like-minded students, and develop 
          their problem-solving skills. If you are a high school student, we encourage you to participate.
        </p>
      </section>

      {/* Events Section */}
      <section className="section events-section">
        <h2 className="eventsheading">Events</h2>

        <a href="/hack">
        <div className="event-card">
          <img src="/ha.jpeg" alt="Hackathon" />
          <div className="event-text">
            <h3>Hackathon</h3>
          </div>
        </div>
        </a>

        <a href="/esp">
        <div className="event-card">
          <img src="/espo.jpeg" alt="Esports" />
          <div className="event-text">
            <h3>Esports</h3>
          </div>
        </div>
        </a>

        <a href="/cod">
        <div className="event-card">
          <img src="/codalo.jpeg" alt="Codalo" />
          <div className="event-text">
            <h3>Codalo</h3>
          </div>
        </div>
        </a>

        <a href="/machine"><div className="event-card">
          <img src="/ML.jpeg" alt="Machine Learning" />
          <div className="event-text">
            <h3>Machine Learning</h3>
          </div>
        </div>
        </a>

        <a href="https://drive.google.com" className="more-info-btn">Click here for more information</a>
      </section>

      {/* Theme Section */}
      <section className="theme-section">
        <div className="theme-content">
          <h2>Theme</h2>
          <h3>Innovating Tomorrow's Future</h3>
        </div>
      </section>

      {/* Date Section */}
      <section className="date">
        <div className="date-content">
          <h2>DATE</h2>
          <h3>19th November</h3>
          <div className="countdown-timer">{timeLeft}</div>
        </div>
      </section>

      <div class="faq-container">
        <div class="faq-header">FAQs</div>

        <div class="faq-item">
            <div class="question">What time is the school expected to reach the venue?</div>
            <div class="answer">All teams are expected to report to school by 8:00 AM for registrations which will be followed by the opening ceremony.</div>
        </div>

        <div class="faq-item">
            <div class="question">Can a student participate in more than one event?</div>
            <div class="answer">No, a student can apply for exactly one event in the entire hackathon. So choose wisely before filling in the form.</div>
        </div>

        <div class="faq-item">
            <div class="question">Is the hackathon an individual or group event?</div>
            <div class="answer">The logical hackathon and e-sports competitions will be an individual-only event. However, the Codalo event is for a team of 6 members.</div>
        </div>

        <div class="faq-item">
            <div class="question">Will devices be provided?</div>
            <div class="answer">No, aside from consoles for e-sports, there will be no devices provided from our side.</div>
        </div>
    </div>

 

      {/* Venue Section */}
      <section className="venue">
        <h2>Venue</h2>
        <p>Gems New Millennium School</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.351350881146!2d55.25488967537953!3d25.12380967775823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f693bd0e85867%3A0xd2a026430b7cfc05!2sGEMS%20New%20Millennium%20School!5e0!3m2!1sen!2sae!4v1725723427009!5m2!1sen!2sae"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsor-logos">
          <img src="images/dahua-logo.png" alt="Dahua" style={{ width: "200px" }} />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Magnificus Concursus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
