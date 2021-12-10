const aluno = require ('./aluno');

const Marcela = new aluno.constructor ("Marcela",2,[8,5,10]);


const Mario = new aluno.constructor ("Mario",8,[8,8,10]);


const Beatriz = new aluno.constructor ("Beatriz",2,[7,9,0]);


module.exports = {
    Marcela,
    Mario,
    Beatriz,}

