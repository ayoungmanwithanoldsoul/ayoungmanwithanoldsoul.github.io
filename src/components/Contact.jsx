import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/le-petit-prince-contact.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [ipAddress, setIpAddress] = useState(''); // State to store the IP address
  const [browserInfo, setBrowserInfo] = useState(''); // State to store the browser info
  const [osInfo, setOsInfo] = useState(''); // State to store the OS info

  useEffect(() => {
    // Fetch the IP address using the ipify API
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Failed to fetch IP address:', error));

    // Detect browser and OS
    const userAgent = window.navigator.userAgent;
    const browser = window.navigator.vendor || window.navigator.userAgent;
    const os = window.navigator.platform;

    setBrowserInfo(browser);
    setOsInfo(os);
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Prepare the template parameters
    const templateParams = {
      ...formDetails,
      ip: ipAddress,
      browser: browserInfo,
      os: osInfo
    };

    // Log all the details to the console
    console.log("Form Details:", templateParams);

    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID,  // Correct environment variable usage
      import.meta.env.VITE_APP_TEMPLATE_ID, // Correct environment variable usage
      templateParams,                       // Include IP, browser, and OS info
      import.meta.env.VITE_APP_PUBLIC_KEY   // Your EmailJS user ID
    )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
        setButtonText("Send");
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        setButtonText("Send");
      });
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
      }, 3000); // Disappears after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [status]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>✉️ Get In Touch</h2>
                  <p>
                    Feel free to reach out if you want to build something together, have a question, or just want to say hello.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col size={12}>
                          <div className={`alert ${status.success === false ? "alert-danger" : "alert-success"} animate__animated animate__fadeInUp`}>
                            {status.message}
                          </div>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
