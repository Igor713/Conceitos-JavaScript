// Qual a diferença entre =, == e ===

// Operador de atribuição =
x = 10;
y = 20;
z = x + y;

// Operador usado para comparação de variáveis, independente do tipo de dado ==
x = 10;
// Retorna falso
x == 8;
// Retorna true
x == 10;
// Retorna true
x == "10";

// Operador que compara valor e tipo igual
x = 10;
// Retorna false
x === 8;
// Retorna true
x === 10;
// Retorna false
x === "10";


