import React, { useState } from 'react';
import Project from "../components/Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'weather-update-app',
      description: 'Dynamic HTML/CSS/Server-Side API',
      link: "https://purpleamaranth.github.io/weather-update-app/",
      repo: "https://github.com/PurpleAmaranth/weather-update-app"
    },
    {
      name: 'note-taker',
      description: 'Heroku/MERN Stack',
      link: "https://pa-note-taker.herokuapp.com/",
      repo: "https://github.com/PurpleAmaranth/note-taker"
    },
    {
      name: 'can-you-code-quiz',
      description: 'HTML/JavaScript/CSS',
      link: "https://github.com/PurpleAmaranth/can-you-code-quiz/settings/pages",
      repo: "https://github.com/PurpleAmaranth/can-you-code-quiz"
    },
    {
      name: 'budget-tracker',
      description: 'Heroku/Node/MongoDB Atlas',
      link: "https://purpleamaranth-budget-tracker.herokuapp.com/",
      repo: "https://github.com/PurpleAmaranth/budget-tracker"
    },
    {
      name: 'client-password-generator',
      description: 'HTML/JavaScript/CSS',
      link: "https://purpleamaranth.github.io/client-password-generator/",
      repo: "https://github.com/PurpleAmaranth/client-password-generator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
