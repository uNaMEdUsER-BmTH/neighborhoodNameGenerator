const prefixes=["Sanctuary at",""];
const names =["Alexander","Tilden","Emerald"];
const suffixes = ["Pointe","Ridge","Place"];

output = document.getElementById("name");
generateButton = document.getElementById("generate");

generateButton.addEventListener("click", generateName);
function generateName() {
console.log((Math.random()*names.length())+1);
}