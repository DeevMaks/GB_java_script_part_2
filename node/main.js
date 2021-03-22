const fs = require('fs');

fs.readFile('./public/goods.json', 'utf-8', (err, data) => {
    if (!err) {
        const goods = JSON.parse(data);
        console.log(goods);

        const maxId = goods.reduce((acc, good) => acc < good.id ? good.id : acc, 0);

        const newObj = {
            id: maxId + 1,
            title: 'Pants',
            price: 200
        }

        goods.push(newObj);

        fs.writeFile('./public/goods.json', JSON.stringify(goods), (err) => {

        })
    }
});