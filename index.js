const express = require('express');
const mongoose = require('mongoose');
const app = express() 

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.post('/api/products', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect("mongodb+srv://alijavedofficial0007:F2YVeyKxElViEgWu@backenddb.d5pyjuz.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backenddb")
.then(() => {
    console.log('Connected to database')
}).catch(() => {
    console.log('Not connected to database')
})
