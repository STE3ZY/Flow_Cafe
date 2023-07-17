import { Slide } from "react-awesome-reveal";
import "./Info.css";

const Info = () => {
  return (
    <section className="section-contact">
      <div className="contact-container ">
        <Slide direction="left" triggerOnce>
          <div className="info-text">
            <div className="text-box">
              <span>ΕΠΙΚΟΙΝΩΝΙΑ</span>
            </div>
            <div className="info">
              <p>
                Μπορείτε να μας βρέιτε στην οδό:{" "}
                <span>Πίνδου 55, Καλαμπάκα</span>
                έναντι ΟΣΕ ή να επικοινωνήσετε μαζί μας τηλεφωνικά στο
                <span>24320 23450</span> Για την ηλεκτρονική μας επαφή, μπορείτε
                να στείλετε e-mail στο:
                <span>flowcafegr@gmail.com</span>
              </p>
            </div>
          </div>
        </Slide>
        <Slide direction="right" triggerOnce duration={2500}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.6070846388225!2d21.622681876667503!3d39.703537471563074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13590fb4da865423%3A0xa9ca20737bb0393e!2sFlow%20Handmade%20Pies%20%26%20Coffee!5e0!3m2!1sen!2sgr!4v1689537253012!5m2!1sen!2sgr"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="info-map"
            title="FlowCafeLocation"
          ></iframe>
        </Slide>
      </div>
    </section>
  );
};

export default Info;
