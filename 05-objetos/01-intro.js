/*
let email = 'efren@gmail.com';
let name = 'Efrén';
let address = {
    calle: 'Morera',
    num: 42,
};
*/

let user = {
    email: 'efren@gmail.com',
    name: 'Efrén',
    address: {
        calle: 'Morera',
        num: 42,
    },
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};

console.log(user);