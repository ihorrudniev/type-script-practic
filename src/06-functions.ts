/** параметры фунцкции не инферятся, ф-ия должна понимать что мы ей передаем, поэтому указываем тип для каждого параметра */

interface IAddFn {
(x: number, y: number):  number;
}
type AddFn = (x: number, y: number) => number;

const addExpression: IAddFn = function (x, y) {
  return x + y
}
// const addExpression = function (x: number, y: number): number {
//   return x + y
// }
// addExpression({}, [])
// addExpression(3, "2")
addExpression(2, 3)



const addArrow: AddFn = (x, y) => {
  return x + y
}
// const addArrow = (x: number, y: number) => {
//   return x + y
// }
addArrow(2, 3)



type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;
const fn: Fn = (a, b, c, ...restParams) => {
  return 8
}
// const fn = (a:number,b:number,c:number, ...restParams:number[]) => {}
fn(1, 2, 3, 4, 5, 6, 7, 8, 9)



type LogFn = (message: string) => number | void; 
const log: LogFn = (message) => {
  console.log(message);
  return 5
}
log('Hello')



enum PizzaSize{
  Small = 's',
  Medium = 'm',
  Large = 'l',
}
//  1 - сначала описываем интерфейс
//  2 - затем на основании его пишем логику (что принимают ф-ии и др.)

interface IPizza{ 
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large
  toppings: string[],
  // logSize?: () => void,   /** old version  ?: необязательный метод */ 
  logSize?(): void,          /** new version ?: необязательный метод */
  getSize(): string,
  addTopping(topping: string): void,
}


const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping)
  },
}

console.log(pizza);
export { }