
let a = parseInt(prompt("side 1 =", ""));
let b = parseInt(prompt("side 2 =", ""));
let c = parseInt(prompt("side 3 =", ""));



if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("input values should be ONLY numbers");
} else if (a == 0 || b == 0 || c == 0) {
    alert("A triangle must have 3 sides with a positive definite length");
} else if (a + b <= c || b + c <= a || a + c <= b) {
    alert("‘Triangle doesn’t exist’");
} else if (a !== c && a !== b && b !== c) {
    alert("Scalene triangle");
} else if (a == b && b == c) {
    alert("Equilateral triangle");
} else if (a == c !== b || a == b !== c || b == c !== a) {
    alert("Isosceles triangle");
}


