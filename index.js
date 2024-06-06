const express = require('express');
const mongoose = require('mongoose');
const app = express() 
const Product = require('./modal/product.model.js')
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/api/products', async (req,res) => {
    try {
        const product = await Product.find({})
        res.status(500).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/api/products/:id', async (req,res) => {
    try {
         const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product) {
        return res.status(404).json({message: 'Product not found'})
    }
   const updatedProduct = await Product.findById(id)
   res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/api/products/:id', async ( req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
         return res.status(404).json({message: "product not found"})
        }

        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb+srv://alijavedofficial0007:F2YVeyKxElViEgWu@backenddb.d5pyjuz.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backenddb")
.then(() => {
    console.log('Connected to database')
}).catch(() => {
    console.log('Not connected to database')
})
