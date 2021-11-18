const path = require('path');
const express = require('express')
const app = express()
const port = 3000

//Home route
app.use(express.static(path.join(__dirname, '.')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'index.html'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/404.html'))
})


//Listen for connections
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`)
})