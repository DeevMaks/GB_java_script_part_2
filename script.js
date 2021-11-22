const goods = [
    { title: 'Shirt', image: 'images/shirt.jpeg', price: 150 },
    { title: 'Socks', image: 'images/socks.jpeg', price: 50 },
    { title: 'Jacket', image: 'images/jacket.jpeg', price: 350 },
    { title: 'Shoes', image: 'images/shoes.jpeg', price: 250 },
];

const $goodsList = document.querySelector('.goods__list');

const renderGoodsItem = ({ title, image, price }) => {
    return `<div class="goods__item">
                <h3 class="item__header">${title}</h3>
                <img class="item__image" src="${image}" alt="Goods Item: ${title}">
                <p class="item__price">Price: ${price}</p>
            </div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        (item) => {
            return renderGoodsItem(item)
        }
    ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();


