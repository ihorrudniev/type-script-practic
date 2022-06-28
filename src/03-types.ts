// type composition
type ID = number | string;
const userId: ID = 546 
const postId: ID = 'g13w6vb458gsf6'

type Coords = [number, number]
const coords: Coords = [60.4895, 31.9873]

// union - one of many: 
// request
// success
// error

type ReqStatus = 'request' | 'success' | 'error'
const requestStatus: ReqStatus = 'success'

type CellSize = 2 | 4 | 8 | 16;
// const cell: CellSize = 5;
const cell: CellSize = 8;

console.log(userId,postId,coords,requestStatus,cell);
export {}