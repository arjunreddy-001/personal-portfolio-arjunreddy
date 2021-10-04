import { useRef, useState } from "react";
import styles from "./ContactPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";
import { setTimeout } from "timers";

const rightArrowIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />;

const ContactPage: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [submitBtnText, setSubmitBtnText] = useState("Send Message");
  const [isMessageSending, setIsMessageSending] = useState(false);

  const sendMessageHandler = (event: FormEvent) => {
    event.preventDefault();
    setIsMessageSending(true);

    const url = "https://formsubmit.co/ajax/b7c8a12cd083761a2f44481ad4834437";

    const data = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
      _subject: nameRef.current!.value + " via Contact Form - arjunreddy.in",
      _template: "table",
      _replyto: emailRef.current!.value,
    };

    // Send mail using mail forwarder service (formsubmit.co)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    // Clear input fields of contact form
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    messageRef.current!.value = "";

    setIsMessageSending(false);
    setSubmitBtnText("Message Sent");

    setTimeout(() => setSubmitBtnText("Send Message"), 5000);
  };

  return (
    <section className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <h2 className={styles["contact-title"]}>Contact Me</h2>
        <div className={styles["contact-subtitle"]}>Get in touch</div>

        <form onSubmit={sendMessageHandler} className={styles["contact-form"]}>
          <div className={styles["contact-inputs"]}>
            <div className={styles["contact-content"]}>
              <label htmlFor="name" className={styles["contact-label"]}>
                Name
              </label>
              <input
                type="text"
                ref={nameRef}
                id="name"
                className={styles["contact-input"]}
                required
              />
            </div>

            <div className={styles["contact-content"]}>
              <label htmlFor="email" className={styles["contact-label"]}>
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                id="email"
                className={styles["contact-input"]}
                required
              />
            </div>

            <div className={styles["contact-content"]}>
              <label htmlFor="message" className={styles["contact-label"]}>
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                cols={0}
                rows={7}
                className={styles["contact-input"]}
                required
              />
            </div>
          </div>

          <div className={styles["btn-container"]}>
            <button type="submit" className={styles["btn-download"]}>
              <span className={styles["btn-text"]}>
                {isMessageSending ? "Sending..." : submitBtnText}
              </span>
              <span className={styles["btn-icon"]}>{rightArrowIcon}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
