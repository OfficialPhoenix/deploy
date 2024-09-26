const express = require('express')

const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine','ejs')

app.get('/', (req, res)=>{
    res.render('home')
})
app.get('/login', (req, res)=>{
    res.render('login')
})
app.listen(port, ()=>console.log(`server is listening to ${port}`))