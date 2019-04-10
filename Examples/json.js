const fs = require('fs');

const pessoa = {
    name :'cleber',
    age: 32
};

console.log(pessoa);
const pessoaJSON = JSON.stringify(pessoa);
console.log(pessoaJSON);

const buffer = fs.writeFileSync('pessoa.json', pessoaJSON);

const pessoaRecuperada = JSON.parse(buffer);
console.log(pessoaRecuperada);
