const fibonacci = function (num) {
    if (typeof num === "string") num = Number(num);
    if (num < 0) return "OOPS";
    if (num === 0 || num === 1) return 1;

    let a = 0;
    let b = 1;
    /* empezamos des de el 2 porque 0 y 1 ya estan en a y b, 
    iteramos hasta el num y sumamos a y b para obtener el siguiente numero en la secuencia de fibonacci
    lo guardamos en next, luego actualizamos a y b para la siguiente iteracion
    al final devolvemos b que es el ultimo numero de la secuencia de fibonacci hasta num
    0, 1, 1, 2, 3, 5, 8, 13, ...
    */
    for (let i = 2; i <= num; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
