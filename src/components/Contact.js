import React from 'react';
import { validateEmail } from '../utils/helpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }


  return (
    <section id="contact">
      <div class="section">
        <form
          name="test"
          class="section"
          onSubmit={handleSubmit}>
          <h2 class="title">
            Contact Me
          </h2>
          <div class="field">
            <label htmlFor="name" class="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="input"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="field">
            <label htmlFor="email" class="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="input"
              placeholder="Email input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div class="field">
            <label
              htmlFor="message"
              class="label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="textarea"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="button is-link">
            Submit
          </button>
        </form>
      </div>
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.006282688887!2d-79.40451798450107!3d43.689632779120124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3342a4cd09c9%3A0x2414ea1ac92091bd!2s609%20Avenue!5e0!3m2!1sen!2sca!4v1663634082450!5m2!1sen!2sca"
          />
          <div>
            <div class="section">
              <div class="columns is-half is-centered has-text-centered">
                <div class="column is-half mb-5">
                  <h2 class="subtitle">
                    ADDRESS
                  </h2>
                    <p className="mt-1">
                  609 Avenue Road <br />
                  Toronto, ON M4V0B1
                </p>
                </div>
                <div class="column is-half mb-5">
                <div>
              <h2 class="subtitle">
                EMAIL
              </h2>
              <a>
                vedad.rzali@gmail.com
              </a>
            </div>
                </div>
              </div>
            </div>
            
            <a class="button is-primary mr-3" href="https://github.com/vrzali">
                <span class="icon">
                  <FontAwesomeIcon icon={faCode}/>
                </span>
                <span>GitHub</span>
              </a>
              <a class="button is-primary mr-3 mb-4" href="https://www.linkedin.com/in/vadadrzali/">
                <span class="icon">
                  <FontAwesomeIcon icon={faNetworkWired}/>
                </span>
                <span>LinkedIn</span>
              </a>
          </div>
        </div>
    </section>
  );
}
