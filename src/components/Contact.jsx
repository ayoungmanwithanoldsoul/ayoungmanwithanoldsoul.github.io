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
    message: '',
    browser: '',
    os: '',
    ip: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // Fetch user's IP address
  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setFormDetails(prevData => ({ ...prevData, ip: data.ip })))
      .catch(error => console.error('Error fetching IP address:', error));
  }, []);

  // Get browser and OS details
  const getBrowserAndOS = () => {
    const userAgent = navigator.userAgent;
    let browser, os;

    if (userAgent.indexOf("Firefox") > -1) {
      browser = "Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
      browser = "Samsung Internet";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browser = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      browser = "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      browser = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browser = "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browser = "Safari";
    } else {
      browser = "Unknown Browser";
    }

    if (userAgent.indexOf("Win") !== -1) os = "Windows OS";
    else if (userAgent.indexOf("Mac") !== -1) os = "Macintosh";
    else if (userAgent.indexOf("Linux") !== -1) os = "Linux OS";
    else if (userAgent.indexOf("Android") !== -1) os = "Android OS";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";
    else os = "Unknown OS";

    return { browser, os };
  };

  useEffect(() => {
    const { browser, os } = getBrowserAndOS();
    setFormDetails(prevData => ({ ...prevData, browser, os }));
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

    emailjs.sendForm(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_APP_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({ success: true, message: 'Message sent successfully' });
        setFormDetails(formInitialDetails);
        setButtonText("Send");
      })
      .catch((error) => {
        setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        setButtonText("Send");
      });
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
      }, 3000);

      return () => clearTimeout(timer);
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
                  <h2>Get In Touch</h2>
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
