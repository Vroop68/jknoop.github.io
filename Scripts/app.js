/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"

    // About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {



    }


    function AboutContent() {
        //Header for About page
       let aboutTitle= document.getElementById("aboutTitle");
       aboutTitle.textContent="About Me";

        //Mission Statement
        let missionStatement=document.getElementById("missionStatement");
        missionStatement.textContent="My mission is to work towards my diploma and hopefully enjoy doing it. Afterwards I hope to enjoy games, specifically online MMO's.";;
    }

    function ProjectsContent() {
        let titleProjects= document.getElementById ("titleProjects");
        titleProjects.textContent="Past Projects";

        let projectTitle1=document.getElementById("projectTitle1");
        projectTitle1.textContent="Careers Game of Life";

        let project1Content= document.getElementById("project1Content");
        project1Content.textContent="This is a project that I did in 10th grade for Careers class. We were required to create our own version of the game of life. I unfortunately do not have any photos of the full game but do have photos of these game pieces I made!";

        let projectTitle2=document.getElementById("projectTitle2");
        projectTitle2.textContent="TEST";

        let project2Content= document.getElementById("project2Content");
        project2Content.textContent="This is placeholder text";
        
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            case "COMP125 - Projects":
                ProjectsContent();
                break;

            default:
                break;
        }
    }

    //window.onload = Start;

    window.addEventListener("load", Start);
})();