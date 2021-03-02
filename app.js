const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const templates = require('./template_helper.js')
const routes = require('./routes/routes.js')


app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


let homeRouter = express.Router()



app.use('/', homeRouter)

homeRouter.use((req, res, next) =>{
	// logar cada requisição no console
  console.log(req.method, req.url)
  // continue com o que precisar ser feito e vá para a rota
  next()	
})



// home
app.get('/', async (req, res) => {

    let r = await templates.getpart('headr.html')

 	r += await templates.getpart('home.html')

    r+= await templates.getpart('footer.html')

    res.send(r)

})


app.get('/series', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})


app.get('/filmes', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})


app.get('/mais-recentes', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})


app.get('/minha-lista', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})


app.get('/categorias', async (req, res) => {

    let r = await routes.get(req.url)

    res.send(r)

})


app.listen(4000,() => {
    console.log(`Servidor rodando em http://localhost:${4000}`);
});