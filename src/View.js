export default class View {
    constructor(data, eventEmiter) {
        this.data = data;
    }

    getProductItem({ title, price }) {
        return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
    }


    renderItem(placeToInsert, itemObject) {
        placeToInsert.insertAdjacentHTML('beforeend',
            this.getProductItem(itemObject));
    }


    renderItems(placeToInsert, objectItems) {
        //objectItems=ArrayOfObjects
        objectItems.map((item) => {
            this.renderItem(placeToInsert, item);
        }).join('');
    }
}