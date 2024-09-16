const prefixes=["Sanctuary at"];
const names =["Alexander","Tilden","Emerald","Windermere","Wintermere","Hamlin","Summer","Orange","Magnolia","Oak","Winter","Maple","Forest"];
const suffixes = ["Pointe","Ridge","Place","Knoll","Hill","Lake","Grove","Park","Waters"];

const output = document.getElementById("name");
const generateButton = document.getElementById("generate");
const neighborhood = document.getElementById("neighborhood");
const list = document.getElementById("list");
generateButton.addEventListener("click", generateName);

function generateName() {
    let name = Math.floor(Math.random()*names.length);
    let prefix = Math.floor(Math.random()*prefixes.length);
    let suffix = Math.floor(Math.random()*suffixes.length);
    let textOutput = names.at(name) + " " + suffixes.at(suffix)
    console.log(name + " " + suffix);
    console.log(textOutput);
    output.innerHTML = textOutput;
    list.innerHTML += textOutput + "<br>";
    neighborhood.innerHTML = "Your Genereated Neighborhood Name is: ";
    //console.log(prefix + " " + name + " " + suffix);
    //console.log(prefixes.at(prefix) + " " + names.at(name) + " " + suffixes.at(suffix));
    
};