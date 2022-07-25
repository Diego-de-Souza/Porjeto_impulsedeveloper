// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'Diego'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Diego'
}

// Respostas 3 e 4
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Diego';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Diego'
}