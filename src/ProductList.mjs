export default class ProductList {
    constructor(list) {
        this.list = list;
        this.itemIndex = -1;
    }

    getList() {
        return this.list;
    }

    find(id) {
        const index = this.list.findIndex((item) => item.id === id);

        if (index >= 0) {
            this.itemIndex = index;
            return this.list[index];
        }

        return false;
    }

    removeById(id) {
        const index = this.list.findIndex((item) => item.id === id);

        if (index >= 0) {
            this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)]
            return true;
        }
        return false;
    }
}