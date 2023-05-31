console.log(document);
const username="Jan Kowalski"  

const newButton = document.createElement("button");
newButton.textContent = "Kup teraz"
newButton.style.backgroundColor = "gold";
newButton.style.color = "red";
newButton.id = "Przycisk";

document.body.append(newButton);

//console.log(newButton);

const tytulElement = document.getElementById("tytul");
tytulElement.textContent = "Hello World";
tytulElement.style.border = "2px solid black";

console.log(tytulElement);


const titleElement = document.getElementById("title");
titleElement.textContent = "Witaj świecie";
titleElement.style.backgroundColor = "green";

console.log(titleElement);

const createTitle = (tag,text,fontColor) => {
    const element = document.createElement(tag);
    element.textContent = text;
    element.style.color = fontColor;
    document.body.append(element);
}

createTitle("h2","Czesc","green");
createTitle("h6","witajcie", "red");
createTitle("h1","Hello","blue");

const parentBox = document.getElementById("box");

const cardbox = dcument.createElement("section");
cardbox.classlist.add("card");

const titlebox = document.createElement("h2");
titlebox.textContent = "Hello World";
titlebox.classList.add("card-title");

const buttonElement = document.createElement("button");
buttonElement.textContent ="Kup teraz";
buttonElement.classList.add("card-desc");

const inputElement = docuemnt.createElement("input");
inputElement.textContent="Podaj Hasło";
inputElement.classList.add("card-input");






