function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

let punto = { z: 7};
let punto2 = { i: 10};
Punto.call(punto, 1, 2);
Punto.apply(punto2, [1, 2]);

console.log(punto);
console.log(punto2);

/*
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() { console.log('Dibujando...'); }
`);
const p = new Point(1, 2);
console.log(p);
*/
