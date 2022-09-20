import React from "react";
import coverImage from '../../src/assets/cover-image.JPG';

export default function About() {
  return (
    <section id="about" class="columns is-centered">
      <div class="section">
        <figure class="image is-128x128">
          <img class="is-rounded" src={coverImage} />
        </figure>
        <h1 class="title">
          Hi, I'm Vadad.   </h1>
        <p class="subtitle">I love to build amazing
          apps.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </p>
      </div>
    </section>
  );
}
