// Custom JS  file name: app.js Author: John Knoop site name: vroop68.github.io
(function() {
  "use strict";
  //function for home content. Page currently under construction
  function HomeContent() {}

  function Lab3() {
    //Header for About page
    let aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.textContent = "About Me";
    //list of favorites
    let favorites = ["Video Games", "Music", "Film", "Science"];
    let myFavorites = document.getElementById("favorites");
    favorites.forEach(item => {
      let newItem = document.createElement("li");
      newItem.textContent = item;
      myFavorites.appendChild(newItem);
    });
  }
  function AboutContent() {
    //Header for About page
    let aboutTitle = document.getElementById("aboutTitle");
    aboutTitle.textContent = "About Me";

    //Mission Statement
    let missionStatement = document.getElementById("missionStatement");
    missionStatement.textContent =
      "My mission is to work towards my diploma and hopefully have fun doing it. Afterwards I hope to enjoy games, specifically online MMO's.";

    //Bio info
    let bio = document.getElementById("bio");
    bio.textContent =
      "I am in my second semester of Interactive Gaming at Centennial College. I chose to study game design as I would love to tell interactive stories within games. I feel that games are a modern art form.  Some of my favorite things are:";

    //list of favorites
    let favorites = ["Video Games", "Music", "Film", "Science"];
    let myFavorites = document.getElementById("favorites");
    favorites.forEach(item => {
      let newItem = document.createElement("li");
      newItem.textContent = item;
      myFavorites.appendChild(newItem);
    });
  }

  function ProjectsContent() {
    //title for projects page
    let titleProjects = document.getElementById("titleProjects");
    titleProjects.textContent = "Projects";
    //custom JS for project1
    let projectTitle1 = document.getElementById("projectTitle1");
    projectTitle1.textContent = "Careers Game of Life";

    let project1Content = document.getElementById("project1Content");
    project1Content.textContent =
      "This is a project that I did in 10th grade for Careers class. We were required to create our own version of the game of life. I unfortunately do not have any photos of the full game but do have photos of these game pieces I made!";
    //JS for project2
    let projectTitle2 = document.getElementById("projectTitle2");
    projectTitle2.textContent = "Friends of Star Wars Galaxies";

    let project2Content = document.getElementById("project2Content");
    project2Content.textContent =
      "7 years ago the MMO Star Wars Galaxies shutdown. However a new version was released 2 years ago coded by fans.  Currently a project I am working on in my free time is helping to get all of my old friends I made in this game almost a decade ago ready to particpate in endgame team based challenges once again.";
    //JS for project3
    let projectTitle3 = document.getElementById("projectTitle3");
    projectTitle3.textContent = "Working With Udemy";

    let project3Content = document.getElementById("project3Content");
    project3Content.textContent =
      "Over the years I have used Udemy as a learning tool. While lately school has kept be too busy to work on it I have used Udemy to learn about Java, HTML and CSS, some C# and C++ as well as some other subjects.  I have found it to be a great learning tool!";
  }
  //JS for  contact page and assignment 2 contact page
  function ContactContent() {
    let fullNameInput = document.getElementById("fullNameInput");
    let phoneInput = document.getElementById("phoneInput");
    let emailInput = document.getElementById("emailInput");
    let messageInput = document.getElementById("messageInput");
    document;
    document
      .querySelector('form.Ass2Contact')
      .addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Full Name:" + fullNameInput.value);
        console.log("Phone #:" + phoneInput.value);
        console.log("Email:" + emailInput.value);
        console.log("Comments:" + messageInput.value);
      })
        let canBtn = document.getElementById("canBtn")
        canBtn.addEventListener("click", function(event){
            event.preventDefault();
            //Default action is prevented and user is taken to about page
            window.open("index.html","_self");
      });
  }

  function Start() {
    let title = document.title;

    console.log("App Started!");
    console.log("----------------------------");
    console.log("Title: " + title);
    //Content is relayed to the correct pages
    switch (title) {
      case "COMP125 - Home":
        HomeContent();
        break;

      case "COMP125 - About":
        AboutContent();
        break;
        case "COMP125 - About2":
        Lab3();
        break;

      case "COMP125 - Projects":
        ProjectsContent();
        break;

      case "COMP125 - Contact":
        ContactContent();
        break;

      case "COMP125 - Assignment 2":
        ContactContent();
        break;

      default:
        break;
    }
  }

  //window.onload = Start;

  window.addEventListener("load", Start);
})();
