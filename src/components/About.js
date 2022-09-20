import React from "react";
import coverImage from '../../src/assets/cover-image.JPG';

export default function About() {
  return (
    <section id="about" className="columns is-centered"> 
      <div className="section has-text-centered">
        <div className="container column has-text-centered mt-5">
          <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src={coverImage} />
          </figure>
        </div>
        <h1 className="title">Hi, I'm Vadad.</h1>
        <p className="subtitle">I love to build amazing apps.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
          Laborum, voluptas natus?
        </p>
      </div>
    </section>
  );
}
