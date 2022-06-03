import "./styles/index.scss";

const name = "Nexave";
let counter = 0;
const test = () => {
   return `Test Successful ${name}`;
};

function gogo() {
   const your = "master";
   counter++;
   let mastergogo = `${your}gogo`;
   return test();
}

console.log(gogo());
console.log(gogo());
