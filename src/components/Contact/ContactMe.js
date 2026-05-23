import { useForm, ValidationError } from "@formspree/react";
import "./ContactMe.css";
export default function ContactMe() {
  const [state, handleSubmit] = useForm("xnjlrypp");

  return (
    <section className="contact-me py-5" id="Contact">
      <div className="contact-content d-flex flex-column align-items-center">
        <h1 className="title">
          <i className="fa-regular fa-envelope"></i>
          contact me
        </h1>

        <p className="sup-title">
          Get in touch with me! Whether you have questions, 
          feedback,<br/> or want to
          discuss a potential project, we're here to help. 
        </p>
      </div>

      <div className="form d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address :</label>
            <input type="email" name="email" id="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div style={{ marginTop: "30px" }} className="form-group">
            <label htmlFor="message">Your Message :</label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Button + Success */}
          {/* Button + Success */}
          <div className="d-flex flex-column align-items-center mt-3">
            <button
              className="submit mt-2"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "submitting..." : "submit"}
            </button>

            {state.succeeded && (
              <h3 className="message py-5 text-center">
                Thanks for joining 👌
              </h3>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
