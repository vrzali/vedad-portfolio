import React from "react";
import { projects } from "../data";
import noteTaker from '../../src/assets/note_taker.png';
import weatherDashboard from '../../src/assets/weather_dashboard.png';
import zooKeepr from '../../src/assets/zoo_keepr.png';
import humble from '../../src/assets/humble.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1 class="title">
            Apps I've Built
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div class="section">
          {projects.map((project) => (
            <div class="columns is-half is-centered has-text-centered">
              <div class="card column is-half mb-5">
              <header class="card-header has-background-primary">
                <p class="card-header-title has-text-white">
                  {project.title}
                </p>
              </header>
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={getImagePath(project)}/>
                  </figure>
                </div>
                <div class="card-content">
                <div class="content">
                    {project.description}
                </div>
                <a class="button is-primary mr-3" href={project.github_link}>
                  <span class="icon">
                    <FontAwesomeIcon icon={faCode}/>
                  </span>
                  <span>GitHub</span>
                </a>
                <a class="button is-primary mr-3" href={project.deployment_link}>
                  <span class="icon">
                    <FontAwesomeIcon icon={faDesktop}/>
                  </span>
                  <span>Deployment</span>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getImagePath(project) {
  switch (project.id) {
    case "note-taker":
      return noteTaker;
    case "weather-dashboard":
      return weatherDashboard;
    case "zoo-keepr":
      return zooKeepr;
    case "humble":
      return humble;
    default:
      return "";
  }
}
