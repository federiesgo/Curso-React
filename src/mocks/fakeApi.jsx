import React from "react";


const products = [
    { id: '01', name: 'random1', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/201', stock: '5' },
    { id: '02', name: 'random2', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/203', stock: '11' },
    { id: '03', name: 'random3', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/205', stock: '23' },
    { id: '04', name: 'random4', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/207', stock: '5' },
    { id: '05', name: 'random5', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/209', stock: '32' },
    { id: '06', name: 'random6', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/212', stock: '22' }
]

const product = 
    { id: '01', name: 'random1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'https://www.picsum.photos/201',
    stock: '5', price: '$6500' };   


export const getProds = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject('Ejecucion no exitosa')
        }
    }, 2000);
})

export const getProd = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(product)
        } else {
            reject('Ejecucion no exitosa')
        }
    }, 2000);
})