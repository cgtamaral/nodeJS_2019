
const fs = require('fs');
const createFile = (diretorio, conteudo) =>{
    fs.appendFileSync(diretorio, '\n' + conteudo);
}

module.exports = {createFile};