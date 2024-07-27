const items = [
    {   
        id: 1, 
        nombre: 'mate',
        precio: 100,
        stock: 10,
        categoria: "mate"
    },
    {   
        id: 2, 
        nombre: 'zapato',
        precio: 200,
        stock: 20,
        categoria: "calzado"
    },
    {   
        id: 3, 
        nombre: 'Termo',
        precio: 300,
        stock: 30,
        categoria: "mate"
    },
    {
        id: 4, 
        nombre: 'Zapatilla',
        precio: 400,
        stock: 40,
        categoria: "calzado"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);
    });
};