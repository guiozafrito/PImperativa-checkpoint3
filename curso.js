const aluno = require('./aluno');

const curso ={
    disciplina: 'Artes',
    Corteaprovação: 7,
    faltasLimite: 5,
    listagem: [],
adicionarAluno: function(nome,faltas,notas){
 this.listagem.push(aluno.construtor(nome,faltas,notas));
},
aprovacao: function(matriculado){
    const media = aluno.calcularMedia(matriculado);
    if (
        media >= this.Corteaprovação &&
        matriculado.QtdDeFaltas < this.faltasLimite
    ){ 
        return `O estudante ${aluno.nome} foi aprovado`;
    } else if (
        matriculado.QtdDeFaltas===this.faltasLimite &&
        media > this.Corteaprovação *1.1
    ){ 
        return `O estudante ${aluno.nome} foi aprovado`;
    }else { 
        return `O estudante ${aluno.nome} foi reprovado`;
    }
},

   listaAprovado: function(){
    let todos = [];

    this.listagem.forEach(matriculado => {
       todos.push(this.aprovacao(aluno)); 
    });
    return todos;
}
}

const aprovados = curso.listaAprovado();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});

module.exports = curso;