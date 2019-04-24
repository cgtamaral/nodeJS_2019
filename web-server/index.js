const express = require('express')
const hbs = require('hbs')
const path = require('path')
const cotacao = require('./utils/cotacao.js')

console.log(__dirname)
const publicAssets = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')



const app = express()
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicAssets))

app.get('',(req,res)=>{
    res.render('index',{
        title : 'Index',
        author : 'Cleber Amaral'
    })
})

app.get('/sobre',(req,res)=>{
    res.render('sobre',{
        title : 'Sobre',
        author : 'Cleber Amaral'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'Help',
        author : 'Cleber Amaral'
    })
})

app.get('/cotacoes/:stockCode',(req,res)=>{
    cotacao.findByStock(req.params.stockCode.toUpperCase(), (data) =>{
        res.render('cotacoes',{
            symbol : data.symbol, 
            price_open: data.price_open, 
            price: data.price, 
            day_high: data.day_high, 
            day_low: data.day_low
        })
    })
   /* res.render('cotacoes',{
        symbol : req.params.stockCode.toUpperCase(), 
        price_open: 'error', 
        price: 'error', 
        day_high: 'error', 
        day_low: 'error'
    })*/
})

app.get('/test',(req,res)=>{

    const pessoa = {
        name: 'Cleber Amaral',
        age: 32 
    }

    res.status(200).json(pessoa)
})

app.get('/people/:id',(req,res)=>{

    if(req.params.id === '1')
    {
        const pessoa = {
            name: 'Cleber Amaral',
            age: 32 
        }
    
        res.status(200).json(pessoa)
    }
    else{
        res.status(400).end()
    }

})

const port = 8080

app.listen(port, () =>{
    console.log('Servidor no ar na porta ' + port)
})