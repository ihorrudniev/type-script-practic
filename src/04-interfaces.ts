// an optional property is denoted by ? before :
interface PlaginConfig {
  readonly selector: string,    /** - readonly поля с readonly key: value */
  perPage?: number,             /** - необязательные поля с 'key?: value' */
  startIndex?: number,
  draggable?: boolean
}

const config:PlaginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  // startIndex: 0,
  // draggable: false,
}

// config.selector = "qweqwe" /**Cannot assign to 'selector' because it is a read-only property. */

/** - ошибка при добавлении полей несуществуюшщих в интерфейсе */
// config.newProp = "poipoi" /**Property 'newProp' does not exist on type 'PlaginConfig'. */

console.log(config);

/** - Index signatures - объект произвольных свойств со значениями "[key: тип]: тип" */
interface Emploees {
  // [key: string]: number[];
  [key: string]: number;
}

const emploees: Emploees = {
  // mango: [5,4,3],
  // poly: [10,3],
  // ajax: [20,7,6],
  // wiki: "qwewq",  /**Type 'string' is not assignable to type 'number'. */
  mango: 5,
  poly: 10,
  ajax: 8,
}

const entries = Object.entries(emploees)
let bestEmploeeName = "";
let bestEmploeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmploeeProIndex <= value) {
    bestEmploeeName = name;
  }
}



console.log(emploees, bestEmploeeName);



export{}