const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  console.log('server is running on port 3000!');
});

app.use(express.static('./public'));

app.get('/data', (req, res) => {
    fs.readFile('./goods.json', 'utf-8', (err, data) => {
        if (!err) {
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        }
    });
});

app.post('/data', (req, res) => {
    let goods = [];

    fs.readFile('./goods.json', 'utf-8', (err, data) => {
        if (!err) {
            goods = JSON.parse(data);
    
            const maxId = goods.reduce((acc, good) => acc < good.id ? good.id : acc, 0);
    
            goods.push({
                id: maxId + 1,
                ...req.body
            });

            console.log(goods);
    
            fs.writeFile('./goods.json', JSON.stringify(goods), (err) => {
    
            })
        }
    });

    res.end(goods);
});