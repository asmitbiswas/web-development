const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hello it's a get request");
  res.send('Hello World2!')
})


app.post('/', (req, res) => {
    console.log("Hello it's a post request");
    res.send('Welcome to my blog!') 
  })

  
app.put('/', (req, res) => {
  console.log("Hello it's a  put request request");
  res.send('Welcome to put request blog!') 
})


app.get("/index", (req, res) => {
    console.log("Hello it's a get request");
  res.sendFile('templates/index.html', { root: __dirname });
});

app.get("/api", (req, res) => {
    res.json({ a:1, b:231, c:654, d:489, name:["Asmit", "John"] });
})




  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})