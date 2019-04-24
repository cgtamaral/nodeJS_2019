const request = require('request');

const token = 'blzBUMWZOn6NTlz3HBvytCkbfY5rDcbFhjTSq3RjGaClU0ySpj1shV8uVJHV'

const findByStock = (symbol, callback) =>
{   
    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${token}`;

    request({url: url, json: true}, (err, response) =>{
        if(err){
            throw new Error(`Something went wrong: ${err}`)
        }        
        
        if(response.body.data === undefined){
            throw new Error(`No data found`)
        }        
        
        const parsedJSON = response.body.data[0]

        const {symbol, price_open, price, day_high, day_low} = parsedJSON

        const data = {symbol, price_open, price, day_high, day_low}

        callback(data)
    })
}

module.exports = {findByStock}
