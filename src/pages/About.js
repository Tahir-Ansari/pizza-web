import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../style/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza is a dish of Italian origin consisting of a usually round,
         flat base of leavened wheat-based dough topped with tomatoes,
          cheese, and often various other ingredients,
           which is then baked at a high temperature,
            traditionally in a wood-fired oven.
             A small pizza is sometimes called a pizzetta
        </p>
      </div>
    </div>
  );
}

export default About;