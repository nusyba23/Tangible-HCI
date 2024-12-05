// Projects Data
const projects = [
    {
        title: "Project 1: LED Blink",
        description: "This project demonstrates basic control of an LED with Arduino, including a button to control the light.",
        link: "Projects/project1.html",
    },
    {
        title: "Project 2: Flex Sensor MIDI Piano",
        description: "The Flex Sensor MIDI Piano allows you to control piano notes through finger bending using a flex sensor and Arduino.",
        link: "Projects/project2.html",
    },
    {
        title: "Project 3: Touch-Sensitive Mood Indicator",
        description: "This project uses a touch sensor to change the color of an LED to indicate different moods based on touch sensitivity, providing a visual feedback system.",
        link: "Projects/project3.html",
    },
    {
        title: "Project 4: Mood Indicator Interactive Tree",
        description: "The Mood Indicator Interactive Tree combines touch sensors and LEDs to create a visually interactive tree that reflects the user's mood through dynamic lighting effects.",
        link: "Projects/Finalproject.html",
    },
];

// Dynamically Render Projects
const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="button">View Project</a>
    `;

    projectList.appendChild(projectDiv);
});
