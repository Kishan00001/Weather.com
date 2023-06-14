const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const PORT = 3000 || process.env.PORT;


// public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/",(req,res)=>{
    res.render("index.hbs");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});

app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});
// app.get("/weather/*",(req,res)=>{
//     res.render("404error.hbs",{
//         errorMsg:'Oops! Page Not Found',
//     });
// });
// app.get("/about/",(req,res)=>{
//     res.render("404error.hbs",{
//         errorMsg:'Oops! Page Not Found',
//     });
// });
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        errorMsg:'Oops! Page Not Found',
    });
});

app.listen(PORT,()=>{
    console.log(`Listening to the port no at ${PORT}`);
});
