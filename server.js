const express = require('express');
const hbs = require('hbs');  //handle bars templating view engine



var app = express();

//views is default directory express finds hbs files
app.set('view engine','hbs');  //setting key value pair

//html route
app.get('/',(request,response)=>{
    response.send('<h1>Hello this is express</h1>');

})


//api route
app.get('/api',(request,response)=>{
    response.send({
        name:'Praveen',
        likes:[{
            fruit:'apple'
        }]
    })
})

//html file static using express middle ware

app.use(express.static(__dirname+"/public")); //go to localhost:3000/index.html


//handle bars html page 
app.get('/about',(request,response)=>{
    response.render('about.hbs',{
        pageTitle:'About Page',
        name:'Praveen',
        currentYear:new Date().getFullYear()
    }); //go to localhost:3000/about
})


//hbspartial files to reuse templates 
hbs.registerPartials(__dirname+'/views/partials');




app.listen((3000),()=>{
    console.log('server is up!');
});