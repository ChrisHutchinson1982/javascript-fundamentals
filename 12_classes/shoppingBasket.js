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

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97
