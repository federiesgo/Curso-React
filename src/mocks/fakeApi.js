import React from "react";


const products = [
    { id: '01', name: 'random1', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/201', stock: '5' },
    { id: '02', name: 'random2', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/203', stock: '11' },
    { id: '03', name: 'random3', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/205', stock: '23' },
    { id: '04', name: 'random4', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/207', stock: '5' },
    { id: '05', name: 'random5', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/209', stock: '32' },
    { id: '06', name: 'random6', desciption: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/212', stock: '22' }
]

export const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject('Ejecucion no exitosa')
        }
    }, 2000);
})