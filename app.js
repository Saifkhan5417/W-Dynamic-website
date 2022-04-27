const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app  = express();
const port = process.env.PORT || 8000;

const partial_path = path.join(__dirname , "Templates/partials")

hbs.registerPartials(partial_path)

const static_path = path.join(__dirname , "public")
app.use(express.static(static_path))


const temp_path = path.join(__dirname,"Templates/views")

app.set("views" , temp_path)
app.set("view engine" , "hbs")

app.get("/" , (req , res)=>{
    res.render("index")
})
app.get("/about" , (req , res)=>{
    res.render("about")
})
app.get("/weather" , (req , res)=>{
    res.render("weather")
})
app.get("*" , (req , res)=>{
    res.send("Something went worng ")
})

app.listen(port , ()=>{
    console.log(`Your app is listen at ${port}`)
})