import CartModel from "../src/CartModel.mjs";
import EventEmitter from "../src/EventEmitter.mjs";
import MockApi from "../src/MockApi.mjs";

const model = new CartModel(new MockApi(), new EventEmitter());
console.log(model);

describe('CartModel.fetch', () => {
    it('получение данных', () => {
        model.fetch();
        expect(model.list.length).toBeGreaterThan(0);
    });
});

describe('CartModel.add', () => {
    it('добавление данных', () => {
        let product = { id: 15, title: "apple", price: 3 };
        model.add(product);
        let product_poped = model.list.pop();
        expect(product_poped.title).toBe("apple");
        expect(product_poped.price).toBe(3);
    });
});

describe('CartModel.remove', () => {
    it('удаление данных', () => {
        const product = { id: 25, title: "pineapple", price: 10 };
        model.add(product);
        model.remove(product.id);

        //в корзине не должно быть товара с id = 25
        const isProductInCart = (item) => item.id === product.id;
        expect(model.list.findIndex(isProductInCart)).toBe(-1);
    });
});