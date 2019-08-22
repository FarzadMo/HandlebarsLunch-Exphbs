//DEPENDENCIES:
var express = require ("express");
var exphbs = require ("express-handlebars");

//EXPRESS INSTANCE:
var app = express ();

//DEFINING THE PORT:
var PORT = process.env.PORT || 8080;

//EXPHBS:
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

//DATA
var lunches = [
    {
        lunch: "Beet & Goat Cheese Salad with minestrone soup."
    },
    {
        lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
    }
];

//ROUTES:
app.get("/weekday", function(req, res){
    res.render("index", lunches[0]);
});

app.get("/weekend", function(req, res){
    res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res){
    res.render("all-lunches",{
        foods: lunches,
        eater: "david"
    });
});


//SERVER
app.listen(PORT, function(){
    console.log("Server is listening on http://localhost/"+PORT);
});