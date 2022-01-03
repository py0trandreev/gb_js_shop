import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import { send } from './utils.js';

const API_URL = 'http://localhost:3000/api/v1';

let productList = [];
let cart = [];

send((error) => { console.log(err) }, (res) => {
    let list = JSON.parse(res);
    console.log("res" + res);
    productList = list;
    renderGoodsList(productList);
}, `${API_URL}/catalog`)
console.log("beeee")

//Пользователь добавляет товар в корзину
let buyed = { id: 5, title: "new", price: 999 };
send((error) => { console.log(err) }, (res) => {
    cart.push(buyed)
}, `${API_URL}/cart`, 'POST', JSON.stringify(buyed), { "content-type": "application/json" })

//Пользователь удаляет товар из корзинки
send((error) => { console.log(err) }, (res) => {
    //cart.pop()
}, `${API_URL}/cart`, 'DELETE', JSON.stringify(buyed), { "content-type": "application/json" })