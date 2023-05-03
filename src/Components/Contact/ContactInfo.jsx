import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faLocationDot, faEnvelope, faMessage);

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <h1>Get in touch</h1>
        <div className="flex-container">
          <div className="address">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <h5>Our Address</h5>
            <p>36 Lyndale Crescent</p>
            <p>Ontario, Canada</p>
          </div>
          <div className="info">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <h5>Contact Info</h5>
            <p>Open a chat or give us a call at</p>
            <span>310.841.5500</span>
          </div>
          <div className="support">
            <FontAwesomeIcon icon="fa-solid fa-message" />
            <h5>Live Support</h5>
            <p>live chat service</p>
            <span>www.jobilivechat.com</span>
          </div>
        </div>
        <form action="">
          <div className="flex-container">
            <div className="name">
              <label htmlFor="name">Name*</label>
              <input type="text" placeholder="Alex Rodgers" />
            </div>
            <div className="email">
              <label htmlFor="email">Email*</label>
              <input type="text" placeholder="rodgersajb@gmail.com" />
            </div>
          </div>
          <div className="subject">
            <label htmlFor="subject">Subject (optional)</label>
            <input type="text" placeholder="Write about the subject here" />
          </div>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            cols="124"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
