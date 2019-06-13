const express= require('express')
const app=express()
Hoursservice=(req, res, next)=>{
let hour= new Date().getHours()
console.log(hour)
if(hour<9 || hour>=17)
res.send("Our office is not open now")
next()
}

app.use(Hoursservice, express.static(__dirname+'/views'))

app.listen(3000, (err)=>{
    if (err) console.log("server is not running")
    console.log("server is running in port 3000")
})