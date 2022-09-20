import React from "react";


export default function Navbar() {
  return (
    <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          Vadad Rzali
        </a>
        <a  class="navbar-item" href="#projects">
          Projects
        </a>
        <a  class="navbar-item" href="#about">
          About me
        </a>
        <a  class="navbar-item" href="#resume">
          Resume
        </a>
        <a  class="navbar-item" href="#contact">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
