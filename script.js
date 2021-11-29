// const goods = [
//   { title: 'Shirt', image: 'images/shirt.jpeg', price: 150 },
//   { title: 'Socks', image: 'images/socks.jpeg', price: 50 },
//   { title: 'Jacket', image: 'images/jacket.jpeg', price: 350 },
//   { title: 'Shoes', image: 'images/shoes.jpeg', price: 250 },
// ];

// const $goodsList = document.querySelector('.goods__list');

// const renderGoodsItem = ({ title, image, price }) => {
//   return `<div class="goods__item">
//               <h3 class="item__header">${title}</h3>
//               <img class="item__image" src="${image}" alt="Goods Item: ${title}">
//               <p class="item__price">Price: ${price}</p>
//           </div>`;
// };

// const renderGoodsList = (list = goods) => {
//   let goodsList = list.map(
//       (item) => {
//           return renderGoodsItem(item)
//       }
//   ).join('');

//   $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();


class GoodsItem {
  constructor(title, image, price) {
    this.title = title;
    this.image = image;
    this.price = price;
  }

  render() {
    return `<div class="goods__item">
              <h3 class="item__header">${this.title}</h3>
              <img class="item__image" src="${this.image}" alt="Goods Item: ${this.title}">
              <p class="item__price">Price: ${this.price}</p>
            </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', image: 'images/shirt.jpeg', price: 150 },
      { title: 'Socks', image: 'images/socks.jpeg', price: 50 },
      { title: 'Jacket', image: 'images/jacket.jpeg', price: 350 },
      { title: 'Shoes', image: 'images/shoes.jpeg', price: 250 },
    ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.image, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods__list').innerHTML = listHtml;
  }

  // СУММА ВСЕХ ТОВАРОВ НА СТРАНИЦЕ
  totalSum() {
    let total = null;
    this.goods.forEach(good => {
      total += good.price;
    })
    document.querySelector('.header').insertAdjacentHTML('beforeEnd', `<div class="goods__totalPrice">Сумма всех товаров на странице: ${total}</div>`)
  }

}

/** Предполагаю, что список элементов корзины будет наследоваться от списка товаров на странице (GoodsList),  а отдельный элемент 
 * корзины - от отдельного товара на странице (GoodsItem).
*/

// CART
class Cart extends GoodsList {
  constructor(title, image, price) {
    super(title, image, price)
  }

  clearCart() {
    return true; // этот метод будет очищать корзину
  }

  buyGoods() {
    return true; // этот метод будет осуществлять потвреждение заказа и переход к оплате
  }
}

// CART ITEM
class CartItem extends GoodsItem {
  constructor(title, price, image) {
    super(title, price, image)
  }


  addOneMore() {
    return true; // метод будет добавлять еще одну единицу конкретного товара
  }

  deleteOne() {
    return true; // метод будет удалять единицу этого товара ()
  }

  deleteItem() {
    return true; // метод будет удалять товар из корзины независимо от того, сколько единиц этого товара добавлено
  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalSum();