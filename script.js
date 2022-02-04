//Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = {
    nome: "Andressa",
    idade: 30,
    profissao: "Analista de Testes e Qualidade de Software Júnior",
    estadoCivil: "Solteira",
    cidadeQueReside: "Botucatu",
    estado: "São Paulo"
}
console.log(pessoa)

//Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoa.escolaridade = "Superior Cursando"
console.log(pessoa)

//Remova uma propriedade desse objeto.
delete pessoa.escolaridade
console.log(pessoa)

//Mostre no console todas as propriedades desse objeto.
console.log(pessoa)

//Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = {
    clientes: [
        {
            nome: "Michelle",
            idade: 32,
            telefone: 00000-0000, 
            amigoEmComum: ["Ana","Juliana"]
        },
        {
            nome: "Marcelo",
            idade: 25,
            telefone: 00000-0001,
            amigoEmComum: ["Evelyn","Matteo"]
        },
        {
            nome: "Ana Maria",
            idade: 41,
            telefone: 00000-0002,
            amigoEmComum: ["Anelize","Julio"]
        },
        {
            nome: "Joana",
            idade: 17,
            telefone: 00000-0003,
            amigoEmComum: ["Bianca","Willian"]
        },
        {
            nome: "Camila",
            idade: 28,
            telefone: 00000-0004,
            amigoEmComum: ["Higor","Jade"]
        }
    ]
}

//Mostre no console o nome de um amigo de cada lista.
console.log(cadastro.clientes[0].amigoEmComum[0], cadastro.clientes[1].amigoEmComum[0], cadastro.clientes[2].amigoEmComum[1], cadastro.clientes[3].amigoEmComum[0], cadastro.clientes[4].amigoEmComum[1])