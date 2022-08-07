// A última versão ECMAScript define sete tipos de dados:

// Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).
x = true;
x = false;

// O tipo Null tem exatamente um valor: null(nulo).
y = null;

// Uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido).
let z;

if (x === undefined) {
    console('Deu certo');
}

// De acordo com os padrões ECMAScript, existe somente um tipo numérico.
x = 10;
y = -10;
z = 3.14;

// BigInt é um objeto nativo que fornece um modo de representar números inteiros maiores que 253, que é o maior número que o JavaScript consegue, com exatidão, representar com o tipo primitivo Number.
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);

// O tipo String em JavaScript é usado para representar dados textuais.
let x = "Eu sei JavaScript";

// Symbols são novos no JavaScript ECMAScript edição 6. Um Symbol é um valor primitivo único e imutável e pode ser usado como chave de uma propriedade de Object
const meuSymbol = Symbol('meu simbolo');

// Na ciência da computação, um objeto é um valor na memória que pode ser possivelmente referenciado por um identifier.
const car = { type: "Fiat", model: "500", color: "white" };

