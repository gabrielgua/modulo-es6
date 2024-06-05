const alunos = [{nome: 'Gabriel', nota: 5}, {nome: 'João', nota: 6}, {nome: 'Maria', nota: 10}];

function aprovados() {
    return alunos.filter(aluno => aluno.nota >= 6);
}

console.log(aprovados());