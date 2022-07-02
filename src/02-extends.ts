/*
 * расширение (extends) дженерика  объектом у кторого есть св-во length  
 */

/*
 * T - тип аргумента
 * extends - включает в себя
 * length: number - какие св-ва еще должны быть
 */

// const logLenght = <T extends { length: number }>(arg: T) => {
//   console.log(arg.length);
// }

  /**вынесем в интерфейс */
  interface ILength{
    length: number
}
const logLenght = <T extends ILength>(arg: T) => {
  console.log(arg.length);
}
// console.log(logLenght([1,2,3,4,5]));
// console.log(logLenght("wqerty"));
// console.log(logLenght(4));


interface IPerson{
  firstName: string;
  lastName: string;
}

const addFullName = <P extends IPerson>(person: P) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`
  }
}

// console.log(
//   addFullName({
//     firstName: "Mango",
//     lastName: "Dodge",
//   })
// );

// console.log(
//   addFullName({
//     firstName: "Mango",
//     lastName: "Dodge",
//     age:8
//   })
// );


export { }