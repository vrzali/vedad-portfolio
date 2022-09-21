import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import ResumePdf from "../assets/resume.pdf";

export default function Resume() {
  return (
    <section id="resume">
        <div class="container">
          <h1 class="title">
            Resume
          </h1>
          <a class="button is-primary mr-3" href={ResumePdf} download>
            <span class="icon">
              <FontAwesomeIcon icon={faCircleDown}/>
            </span>
            <span>Click to Download</span>
          </a>
      </div>
    </section>
  );
}
