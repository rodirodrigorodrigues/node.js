// Conceito de callback

function pedirPizza(callback) {
  console.log("🍕 Fazendo a pizza...");

  setTimeout(() => {
    console.log("✅ Pizza pronta!");
    callback(); // chama a função que foi passada
  }, 2000);
}

function avisarCliente() {
  console.log("📞 O cliente foi avisado que a pizza chegou!");
}

pedirPizza(avisarCliente);

// -----

var fs = require("fs");
// function (err, data) é o callback
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

let i = 1;
while (i <= 5) {
  console.log("The number is " + i);
  i++;
}
