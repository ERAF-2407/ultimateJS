const user = {
    id: 1
};

user.name = 'Efrén';
user.guardar = function () {
    console.log('Guardar', user.name);
}

user.guardar();

delete user.name;
console.log(user);

const user2 = Object.freeze({id: 1});
user2.name = 'Efrén';
user2.id = 2;
console.log(user2);

const user1 = Object.seal({id: 1});
user1.name = 'Efrén';
user1.id = 2;
console.log(user1);
