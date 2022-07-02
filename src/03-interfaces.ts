// interface User{
//   id: number | string ;
// }

// const mango: User = {id:24}
// const poly: User = { id: " p2k6p3" }


interface User<U>{
  id: U ;
}

const mango: User<number> = {id:24}
const poly: User<string> = { id: " p2k6p3" }

// console.log(mango,poly);

interface Tab<T>{
  id: string;
  position: number;
  active: boolean;
  content: T;
}

type TStringTab = Tab<string>;
type TStringTabArray = Tab<string[]>;

const tab1: TStringTab = {
  id: "id-1",
  position: 2,
  active: false,
  content: "Tab data",
}

const tab2: TStringTabArray = {
  id: "id-2",
  position: 4,
  active: true,
  content: ["Content-1", "Content-2"],
}

// console.log(tab1, tab2);


export { }