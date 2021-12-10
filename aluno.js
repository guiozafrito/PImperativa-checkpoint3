const aluno = {
    nome:'',
    QtdDeFaltas: 0,
    Notas: [],
    constructor:function(Nome, QtdDeFaltas, Notas) {
        this.Nome= Nome;
        this.QtdDeFaltas= QtdDeFaltas;
        this.Notas= Notas;
    },
//micro desafio passo 1
calcularMedia: function(aluno) {
    let total = 0;

    aluno.notas.forEach(nota => {
       total += nota; 
    });
    return total/aluno.notas.lenght;
},
aumentarFaltas: function(aluno){
    aluno.QtdDeFaltas++;
}
}
module.exports = aluno;