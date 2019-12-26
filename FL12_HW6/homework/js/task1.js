
let a = parseInt(prompt('a=', ''));
let b = parseInt(prompt('b=', ''));
let c = parseInt(prompt('c=', ''));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
}


let discriminant = b * b - 4 * (a * c);
if (discriminant < 0) {
    console.log('no solution');
} else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log(`x = ${x}`);

} else {
    let x1 = (-b + parseInt(Math.sqrt(discriminant))) / (2 * a);

    let x2 = (-b - parseInt(Math.sqrt(discriminant))) / (2 * a);
    console.log(`x1 = ${x1.toFixed(2)} and x2 = ${x2.toFixed(2)}`);
}
