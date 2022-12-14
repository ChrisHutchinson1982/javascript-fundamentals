class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getItems() {
    return this.basket.map((candy) => {
      return candy.name;
    });
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.price;
    });
    return totalPrice;
  }
}

module.exports = ShoppingBasket;
