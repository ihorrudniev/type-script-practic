const temps: number[] = [9, 25, 88]

const temps1: Array<number> = [9, 25, 88]

// const temps2: number[] = [9, 25, 88, 'qwe']  /**error  Type 'string' is not assignable to type 'number'.*/

const temps3: (number | string| boolean)[] = [9, 25, 88, 'qwe', 'poipo']

temps1.push(5);
// temps1.push('qweqwe');  /**error  Argument of type 'string' is not assignable to parameter of type 'number'.*/

temps3.push('qweqwe');
temps3.push(true);

const temps4: readonly number[] = [55, 12, 3] /**array only read */
// temps4.push(88) /**Property 'push' does not exist on type 'readonly number[]'. */

/**Taple для описания массивов*/
const coords = [50.4561, 36.7841]
const coords1:[number,number] = [50.4561, 36.7841]
// const coords3:[number,number] = [50.4561, 'werwerw'] /**Type 'string' is not assignable to type 'number' */
const rgb:[number,number, number] = [255, 255, 255]

const arrA = [1, 2, 3, 4, 5, 'werrwe'];
const arrB = [...arrA]

console.log(temps, temps1, /**temps2, */ temps3,temps4, coords, coords1, /**coords3,*/ rgb, arrB );



// const entries = Object.entries({ a: 5, b: 10, c: 15 })
// for (const entry of entries) {
//   }

export{}