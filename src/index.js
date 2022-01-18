"use strict";
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
    console.log(data);
});

eventEmmiter.subscribe('cartFeched', (data) => {
    console.log(data);
});

eventEmmiter.subscribe('showProductList', (data) => {
    //data = objectItems(ArrayOfObjects)
    const $showcase = document.querySelector('.showcase');
    const viewItem = new View(data);
    let arrFilterd = null;

    //при нажатии кнопки "Поиск"
    document.querySelector('#search-btn').addEventListener('click', () => {

        // подстрока для фильтрации
        const searchString = document.querySelector('#search-input').value;

        //получаем копию основного массива с продуктами
        arrFilterd = [...data];

        //фильтрация
        const filter = (searchString) => {
            const regExp = new RegExp(searchString, 'i');

            arrFilterd = data.filter(({ title }) => regExp.test(title));

            render(arrFilterd);
        };

        //рендер
        const render = (dataToRender) => {
            const listEl = document.querySelector(".showcase");
            listEl.textContent = '';
            listEl.insertAdjacentHTML('afterbegin', dataToRender.map(viewItem.getProductItem).join(''));
        };

        //фильруем
        filter(searchString);
        // console.log("filter");
    });


    if (!arrFilterd) {
        viewItem.renderItems($showcase, data);
        // console.log("no filter");
    }
});

showcase.fetch();
cart.fetch();

