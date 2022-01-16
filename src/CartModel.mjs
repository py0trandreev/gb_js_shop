import ProductList from './ProductList.mjs';

export default class CartModel extends ProductList {
    constructor(apiHandler, eventEmmiter) {
        super([]);
        this.api = apiHandler;
        this.eventEmmiter = eventEmmiter;
    }

    fetch(onError) {
        this.api.getCart(
            (data) => {
                this.list = JSON.parse(data);
                this.eventEmmiter.emit('cartFeched', this.list);
            },
            onError
        );
    }

    add(product, onError) {
        this.api.addToCart(
            () => {
                this.list.push(product);
            },
            onError,
            product
        );
    }




    remove(id, onError) {
        if (this.find(id)) {
            this.api.removeFromCart(
                () => {
                    this.removeById(id);
                    // this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
                    // console.log(`index ${index}`);
                },
                onError,
                this.list[this.itemIndex]
            );
        }
    }

}