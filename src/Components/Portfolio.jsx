/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ATRIS",
    description:
      "The complete productivity & knowledge automation for meetings, personal notes, lectures, and more.",
    url: "https://github.com/Adarsh1999/atris",
  },
  {
    title: "Twitter-NLP-Telebot-Azure-functions",
    description:
      "A project that utilizes natural language processing (NLP) to analyze Twitter data and a telebot to interact with users. Built on Azure functions.",
    url: "https://github.com/Adarsh1999/Twitter-NLP-Telebot-Azure-functions",
  },
  {
    title: "Notification Service with Kafka, WebSocket (SignalR), and ASP.NET Core",
    description:
      "This project demonstrates a notification system using ASP.NET Core, Kafka, and WebSocket (SignalR). The system is designed to produce notifications via Kafka and broadcast them to connected clients using WebSocket.",
    url: "https://github.com/Adarsh1999/Notification-Service",
  },
  {
    title: "Dice-Cricket",
    description:
      "This is childhood game which I myself created using Dice and hacing a cricket match between 2 teams, now in a created again in term of Technology",
    url: "https://github.com/Adarsh1999/Dice-Cricket",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
