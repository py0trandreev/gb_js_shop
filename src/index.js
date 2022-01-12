import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.mjs';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.mjs';
import '../public/style.css';
import View from './View.js';

const API_URL = '/api/v1';

const api = new ApiHandler(API_URL);
const eventEmmiter = new EventEmitter();

const cart = new CartModel(api, eventEmmiter);
const showcase = new ShowcaseModel(api, eventEmmiter, cart);


eventEmmiter.subscribe('showcaseFeched', (data) => {
    // console.log(JSON.stringify(data))
    //showcase.list = data;
    // console.log(data[0]['title'])
    console.log(data);
});

eventEmmiter.subscribe('cartFeched', (data) => {
    console.log(data);

});

eventEmmiter.subscribe('showProductList', (data) => {
    const $showcase = document.querySelector('.showcase');
    const viewItem = new View(data);
    viewItem.renderItems($showcase, data);
});

showcase.fetch();
cart.fetch();