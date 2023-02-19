// IF CONDITION
age = 30;
if (age > 30) {
  console.log("You are old");
} else if (age < 20) {
  console.log("You are teenager");
} else {
  console.log("You are young");
}

if (name === "EHSAN") {
  console.log("it is corrent");
} // INTERVIEW => == vs ===

switch (age) {
  case 19:
    console.log("Ehsan You are 19");
    break;
  case 30:
    console.log("Ehsan You are old");
    break;
  default:
    console.log("Ehsan You are young");
    break;
}

const weather = "hot"; /// "hot", 'hot', `hot`
// what is the use of backtick?
const feeling = weather === "hot" ? "I am dying" : "I am freezing";

let feeling2 = "";
if (weather === "hot") {
  feeling2 = "I am dying";
} else {
  feeling2 = "I am dying";
}
