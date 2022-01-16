const arr = [                                    //index
    { id: 1, title: 'Hat green', price: 351 },   //0
    { id: 5, title: 'Hat red', price: 328 },     //1
    { id: 7, title: 'Hat yellow', price: 235 },  //2
    { id: 4, title: 'Hat blue', price: 410 },    //3
    { id: 3, title: 'Hat pink', price: 300 },    //4
];

const index = arr.findIndex((element) => element.id === 3);
console.log(index);