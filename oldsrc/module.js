/*
https://jasmine.github.io/pages/getting_started.html
Устанавливаем
*/
npm install--save - dev jasmine

/* Инициализируем 
*/
npx jasmine init

/* Set jasmine as your test script in your package.json
C:\Users\petr\js_pros\LL\gb_js_shop\webpack.config.js   
"scripts": { "test": "jasmine" }  */

"scripts": {
    --- "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
            "start": "webpack serve"
},


"scripts": {
    "test": "jasmine",
        "build": "webpack",
            "start": "webpack serve"
},

/*
ПРИМЕЧАНИЕ:
Команды npm run test и npm run start 
мы можем запускать без слова run:
- npm test
- npm start

Запускаем тест
*/
npm test

/*
он заругается не определена спецификация в папке
C:\Users\petr\js_pros\LL\gb_js_shop\spec 

Давайте в C:\Users\petr\js_pros\LL\gb_js_shop\src\utils.js
Создадим что-н. простое для теста
*/
export const pow = (a, n) => {
    if (n == 0) return 1;

    let result = a;

    for (let i = 1; i < n; i++) {
        result *= a
    }
};

// module.exports = {
//     pow: pow
// };

/*
подключаем utils.js в файле utils.spec.js
C:\Users\petr\js_pros\LL\gb_js_shop\spec\utils.spec.js
*/
const script = require('../src/utils.js');
const pow = script.pow;

/*
Пишем тест 
C:\Users\petr\js_pros\LL\gb_js_shop\spec\utils.spec.js

Группа тестов описывается с помощью метода describe,
каждый отдельный тест описывается методом it.
*/
//так не работает
const script = require('../src/utils.js');
const pow = script.pow;

describe('Функция pow()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => { //ожидаемое поведение с помощью методов expect и toBe 
        expect(pow(3, 2)).toBe(9);

    })
});

import { pow } from '../src/utils.mjs';



describe('Функция pow()', () => {
    it('должна возвращать 9 при аргументах (3, 2)', () => {//ожидаемое поведение с помощью методов expect и toBe 
        expect(pow(3, 2)).toBe(9);

    });
});

/*
Сохраняем и запускаем тесты 
*/
npm test

/*
д/з

Протестировать:
- начали тестировать CartModel 
- Сделйте по одному тесту (лучше по 2) 
на методы add, remove (но можете и fetch протестировать)
*/