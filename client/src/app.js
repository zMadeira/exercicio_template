const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo


/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.redirect("/perfil");
  });

  app.get("/perfil", (req, res) => {
    res.render("perfil");
  });

 app.get("/projetos", listProjects);

app.listen(port, listenHandler);

function listProjects(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("software","JavaScript", 2020, 2023); 
    let projeto_2 = new Projeto("social","",2020,2021);
    let projeto_3 = new Projeto("software","HTML", 2021, 2021);    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('projetos',{lista_projetos: projetos});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}