const soma = (num1, num2) => num1 + num2;

console.log("Arrow Funcion Soma: " + soma(5, 9))

const idade = 17;
const verificaMaioridade = idade => {
    (idade >= 18) ? console.log("Maior de idade") : console.log("Menor de 18 anos");
}

verificaMaioridade(idade);