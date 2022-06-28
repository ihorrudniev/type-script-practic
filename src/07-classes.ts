

interface Params {
  size: string,
  toppings: string[],
}
/** описывает будущий объект  (экземпляр класса)*/
interface IPizza {
  size: string,
  // toppings: string[], /** приватные свойства не должны находиться в интерфейсе */
  addTopping(topping: string): void,
  // validateTopping(topping:string): boolean, /** приватные свойства не должны находиться в интерфейсе */
  
}


class Pizza implements IPizza{
  static Sizes = 5; /** статическое свойство */ 
  //  в классе по умолчанию все свойства и методы публичны они достепны на нашем Экземпляре
  //  приватные свойства используются для разработки, чтоб понимить где к нему можно обращатьсяа где не должен
  public size: string; /** объявляем свойство чтоб в конструкторе им присвоить значение  */
  private toppings: string[]; /** доступно только в методах класса внутри */

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string): boolean {
    console.log(topping);
    // валидация
    return true;  
}

  public addTopping(topping: string) {
    this.toppings.push(topping)
  }
  
}

const pizza: IPizza = new Pizza({size:"medium", toppings: ["cheese"]});
console.log(pizza);
console.log(pizza.size); /** это публичное с-во здесь можно увидеть данные  */
// console.log(pizza.toppings); /** это приватное с-во здесь нельзч увидеть данные  */
// const x = pizza.addTopping("qwerty");
// console.log(x);


export { }