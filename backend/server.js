import express from 'express';
import data from './data.js';

const app = express();
app.get('/', (req, res)=> {
    res.send('Servers is OK');
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Serve at http://localhost:${port}`);
});