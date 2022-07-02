/*
 * Думайте о дженериках как о аргументе функции, в котором вы указываете тип других аргументов
 */
/*
 * Важно чтоб ф-ция принимала любые типы значений но кроме any, потому что при any теряется типизация а при дженериках она остается т.к. при вызове она определяется димамически 
 * <T> - дженерик 
 */

/*
 *  дженерик-функции с одним параметром
 */

/*
 * синтаксис для function declaration 
 */
function add<T, Y>(a: T, b: Y) {
  return [a, b]
}

/*
 * синтаксис для function expression 
 */

const reverse = <T>(arr: T[]) => {
  return [...arr].reverse()
}
// console.log(reverse([1, 2, 3, 4, 5, "wqe"]));
// console.log(reverse(["mango", "poly", "ajax", "kiwi"]));
// console.log(reverse([{ a: 1}, {b:2}, {c:3}, {d:4}]));

/* 
 * Дженерик-функции с N параметрами
 */

const isEqual = <T, Y>(a:T, b:Y) => {
  return Object.is(a, b);
}
// console.log(isEqual(3, 3));
// console.log(isEqual(3,"3"));


const makeArray = <T, Y> (a:T,b:Y) => {
  return [a,b]
}
// console.log(makeArray(2,3));
// console.log(makeArray("Mango","Poly"));
// console.log(makeArray(true, 5));


// Rest for example
const foo = <N, T>(mult: N, ...rest: T[]) => {
  return [mult, ...rest]
}
// console.log(foo(4, [1,2,3,]));
// console.log(foo(6, [7,8,9,]));
// console.log(foo("mango", ["7","8","9",]));

export {}