// class Counter {
//   count = 0;

//   constructor(initialCount = 0) {
//     this.count = initialCount;
//   }

//   increment = () => {
//     this.count = this.count + 1;
//   };

//   decrement = () => {
//     this.count = this.count - 1;
//   };
// }

// describe("Counter", () => {
//   describe("incerment", () => {
//     describe("with valid input", () => {
//       it("increments counter by 1", () => {
//         const counter = new Counter(0); // Setup
//         counter.increment();
//         expect(counter.count).toBe(1);
//       });
//     });
//     describe("with invalid input", () => {
//       describe("with increment value", () => {
//         it("raises an error", () => {
//           const counter = new Counter(0);
//           counter.increment(2);
//           expect(counter.count).toBe(1);
//         });
//       });
//     });
//   });
// });

// ---

// import api from './api'

// class Cart {
//   items = [];

//   addItem = item => {
//     this.items.push(item);
//   };

//   sendCart = () => {
//     api.sendItems(this.items);
//   };
// }

// // ---

// jest.mock('./api')

// describe("Cart", () => {
//   describe("addItem", () => {});

//   describe("sendCart", () => {
//     it("sends items to backend", () => {
//       const cart = new Cart();

//       // cart.addItem('Item 1')
//       // cart.addItem('Item 2')
//       // cart.addItem('Item 3')
//       cart.items = ["Item 1", "Item 2", "Item 3"];
//       cart.sendCart();
//       expect(api.sendItems).toHaveBeenCalledWith([
//         "Item 1",
//         "Item 2",
//         "Item 3"
//       ]);
//     });
//   });
// });

// -------------------

class Cart {
  items = [];
  api = null;

  constructor(api) {
    this.api = api;
  }

  addItem = item => {
    this.items.push(item);
  };

  sendCart = () => {
    this.api.sendItems(this.items);
  };
}

//=====

describe("Cart", () => {
  describe("addItem", () => {});

  describe("sendCart", () => {
    it("sends items to backend", () => {
      const api = { sendItems: jest.fn() };
      const cart = new Cart(api);
      // cart.addItem('Item 1')
      // cart.addItem('Item 2')
      // cart.addItem('Item 3')
      cart.items = ["Item 1", "Item 2", "Item 3"];
      cart.sendCart();
      expect(api.sendItems).toHaveBeenCalledWith([
        "Item 1",
        "Item 2",
        "Item 3"
      ]);
    });
  });
});

// ------------------