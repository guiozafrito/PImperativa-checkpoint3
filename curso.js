const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso ={
    disciplina: 'Artes',
    Corteaprovação: 7,
    faltasLimite: 5,
    listagem: [estudantes.Marcela,estudantes.Mario,estudantes.Beatriz],

adicionarAluno: function(nome,faltas,notas){
 this.listagem.push(new aluno.construtor(nome,faltas,notas));
},
aprovacao: function(estudante){
    const media = aluno.calcularMedia(estudante);
    if (
        media >= this.Corteaprovação &&
        estudante.QtdDeFaltas < this.faltasLimite
    ){ 
        return `O estudante ${aluno.nome} foi aprovado`;
    } else if (
        estudante.QtdDeFaltas===this.faltasLimite &&
        media > this.Corteaprovação *1.1
    ){ 
        return `O estudante ${estudante.nome} foi aprovado`;
    }else { 
        return `O estudante ${estudante.nome} foi reprovado`;
    }
},

   listaAprovados () {
   
    return this.listagem.map ((aluno) => {
        return this.aprovacao(aluno);
    })
}
}
module.exports = curso;