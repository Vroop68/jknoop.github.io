// Custom JS
(function () {
    "use strict"


    function HomeContent() {

    }


    function AboutContent() {
        //Header for About page
       let aboutTitle= document.getElementById("aboutTitle");
       aboutTitle.textContent="About Me";

        //Mission Statement
        let missionStatement=document.getElementById("missionStatement");
        missionStatement.textContent="My mission is to work towards my diploma and hopefully enjoy doing it. Afterwards I hope to enjoy games, specifically online MMO's.";;
        //list of favorites
        let favorites = [
            "Video Games",
            "Music",
            "Film",
            "Science"
        ];
        let myFavorites = document.getElementById("favorites");
        favorites.forEach(item => {
            let newItem = document.createElement("li");
            newItem.textContent = item;
            myFavorites.appendChild(newItem);
        });
    }

    function ProjectsContent() {
        let titleProjects= document.getElementById ("titleProjects");
        titleProjects.textContent="Projects";

        let projectTitle1=document.getElementById("projectTitle1");
        projectTitle1.textContent="Careers Game of Life";

        let project1Content= document.getElementById("project1Content");
        project1Content.textContent="This is a project that I did in 10th grade for Careers class. We were required to create our own version of the game of life. I unfortunately do not have any photos of the full game but do have photos of these game pieces I made!";

        let projectTitle2=document.getElementById("projectTitle2");
        projectTitle2.textContent="Friends of Star Wars Galaxies";

        let project2Content= document.getElementById("project2Content");
        project2Content.textContent="7 years ago the MMO Star Wars Galaxies shutdown. However a new version was released 2 years ago coded by fans.  Currently a project I am working on in my free time is helping to get all of my old friends I made in this game almost a decade ago ready to particpate in endgame team based challenges once again.";
        
    }

    function ContactContent(){
        let submitBtn = document.getElementById("submitBtn")
        submitBtn.addEventListener("click", function(event){
            event.preventDefault();
            window.open("about.html","_self");
        });
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

            case "COMP125 - Contact":
                ContactContent();
                break;

            default:
                break;
        }
    }

    //window.onload = Start;

    window.addEventListener("load", Start);
})();