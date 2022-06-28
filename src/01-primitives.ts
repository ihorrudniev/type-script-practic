let age:number  = 5
const name: string = 'mango'

// better not to use
let value: any = 5
value = "wqeqwe"

// better not to use
// object type is too generic (it can be a function, array, object) - no type or anything, so use exact vs shape in PropTypes. We need to describe our object more accurately and competently
let user: object;
user = {} 

// type composition
let id:  number| string | boolean = 5;
id = 'qweqwe'
id = true
// id = [] /** error */


console.log(age, name, value, user, id);
export {}