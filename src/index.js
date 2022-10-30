const path=require("path");
const express=require("express");
const app=express();
const hbs=require('hbs');
const templatePath=path.join(__dirname,'../templates/views');

const partialPath=path.join(__dirname,'../templates/partials');

app.set("view engine",'hbs');
// to go to the template path
app.set('views',templatePath);
// to register the partial path
hbs.registerPartials(partialPath);
app.get('/',(req,res)=>
{
    res.send("hello from home page");
});

app.get('/contact',(req,res)=>
{
    res.send("hello from home page");
});

app.get('/about',(req,res)=>
{
    res.send("hello from home page");
});

app.get('/weather',(req,res)=>
{
    res.send("hello from home page");
});


app.get('*',(req,res)=>
{
    res.send("404 error page");
});


app.listen(8000,()=>
{
    console.log("listening to port 8000");
});
