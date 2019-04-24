const request = require('request');

const token = 'blzBUMWZOn6NTlz3HBvytCkbfY5rDcbFhjTSq3RjGaClU0ySpj1shV8uVJHV'

const findByStock = (stockCode) =>
{   
    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${stockCode}&api_token=${token}`;

    request({url: url, json: true}, (err, response) =>{
        console.log('funcionou');
    })

    /*
    VALOR FECHAMENTO
    MAIOR ALTA
    MENOR VALOR
    VALOR ABERTURA
    https://github.com/biharck/curso-nodejs
    */
}
module.exports = {findByStock}
