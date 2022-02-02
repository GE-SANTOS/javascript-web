console.log("Fui carregado de um arquivo externo");
//titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
}

if (altura <= 0 || altura >= 4.00) {
    console.log("Altura inválido!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"
}

if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = imc;
}

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);
console.log(imc);