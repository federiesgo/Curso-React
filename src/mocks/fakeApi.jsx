import React from "react";


const products = [
    { id: '01', name: 'manicura1', price: '$21500', category: 'manicura', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/201', stock: '5' },
    { id: '02', name: 'manicura2', price: '$19500', category: 'manicura', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/203', stock: '13' },
    { id: '03', name: 'manicura3',  price: '$18500', category: 'manicura', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/205', stock: '73' },
    { id: '04', name: 'pestanias1', price: '$14500', category: 'pestanias', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/207', stock: '9' },
    { id: '05', name: 'pestanias2', price: '$13500', category: 'pestanias', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/209', stock: '42' },
    { id: '06', name: 'pestanias3', price: '$11500', category: 'pestanias', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/212', stock: '18' },
    { id: '07', name: 'masajes1', price: '$9500', category: 'masajes', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/207', stock: '15' },
    { id: '08', name: 'masajes2', price: '$3500', category: 'masajes', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/209', stock: '32' },
    { id: '09', name: 'masajes3', price: '$6500', category: 'masajes', description: 'Lorem blabla bla bla blabla', img: 'https://www.picsum.photos/212', stock: '22' }
]

export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId);
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 1000);
    })
}

export const getProd = (id) => {

    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find(prod => prod.id === id);
        setTimeout(() => {           
                resolve(productoEncontrado)          
        }, 1000);
    })
}