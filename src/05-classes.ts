type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

/*
 * дженерик Класса
 */

class State <S> {
  private state:S;

  constructor(initialState: S) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState: S) {
    return this.state = newState
  }
}

const animationState = new State<TAnimationState>("playing");
animationState.setState("paused");
animationState.setState("request"); // !ошибка 

const httpState =new State<THttpState>("success");
httpState.setState("request");
httpState.setState("playing"); // !ошибка 


/*
 * дженерик функции 
 * реализация в виде "фабрики"
 */

// type TAnimationState = "playing" | "paused";
// type THttpState = "request" | "success" | "error";

// const makeState = <S>(initialState: S) => {
//   let state = initialState;

//   const getState = () => {
//     return state;
    
//   };

//   const setState = (newState: S) => {
//     state = newState;
//   };

//   return {
//     getState,
//     setState,
//   };
// }

// const animationState = makeState<TAnimationState>("playing");
// animationState.setState("paused");
// animationState.setState("request"); // !ошибка 

// const httpState = makeState<THttpState>("success");
// httpState.setState("request");
// httpState.setState("playing"); // !ошибка 

export { }