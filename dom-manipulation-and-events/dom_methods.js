// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";

container.appendChild(redParagraph);

const blueHeading3 = document.createElement("h3");
blueHeading3.style.color = "blue";
blueHeading3.textContent = "I'm a blue h3!"

container.appendChild(blueHeading3);

const blackpinkDiv = document.createElement("div");
blackpinkDiv.style.borderStyle = "solid";
blackpinkDiv.style.borderWidth = "1px";
blackpinkDiv.style.borderColor = "black";
blackpinkDiv.style.backgroundColor = "pink";


const nestedHeading1 = document.createElement("h1");
nestedHeading1.textContent = "I'm in a div";
blackpinkDiv.appendChild(nestedHeading1);

const nestedParagraph = document.createElement("p");
nestedParagraph.textContent = "ME TOO!";
blackpinkDiv.appendChild(nestedParagraph);

container.appendChild(blackpinkDiv);