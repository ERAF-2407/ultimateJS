/*
let user = {
    id: 1,
    email: 'efren@gmail.com',
    name: 'Efrén',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};
*/

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Efrén', 'efren@gmail.com');
let user2 = crearUsuario('Nicolas', 'nicolas@holamundo.com');

console.log(user1, user2);