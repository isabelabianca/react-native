//Exemplo Array Function  1 linha -> não precisa de chave e nem return
let digaOla = () => console.log("Hi lorena")
digaOla()

//Exemplo Array Function mais de uma linha
let subtracao = (a, b) => {
    let resultado  = a - b
    return resultado
}

//Exemplo Spread Operator
console.log(subtracao(5,3))
// ... antes da variável de array separa os itens do array
const meuArray = [4, 3, 2];
console.log(meuArray);
console.log(...meuArray);
console.log([...meuArray, 4, 5, 6])
console.log(subtracao(...meuArray))

const outroArray = [...meuArray, 4, 9 , ...meuArray, "isa", ...meuArray]
console.log("Outro array: " + outroArray)

// Exemplo Destructuring
// Quebra estruturas cmplexas em partes únicas
const cores = ['verde', 'vermelho', 'azul', 'roxo']
const [cor1, cor2, cor3] = cores
console.log(cores)
console.log(cor1)
console.log(cor2)
console.log(cor3)

const meuObjeto = {
    x: 10, 
    y: 20, 
    z: 30
}

const {x, y, z} = meuObjeto

console.log(`X = ${x}, Y = ${y}, Z = ${z}`)

//Exemplo objetos
let carro = {
    marca:  "Fiat",
    modelo: "Uno",
    cor:    "branco"
}

console.log(carro)
console.log(carro.marca)
console.log(carro.modelo)
console.log(carro.cor)

//Declaração literal
var pessoa = {
    nome: "Chrissy",
    sobrenome: "Tiro Certo",
    id: 3001,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    } 
}

console.log(pessoa);
console.log(pessoa.nomeCompleto())