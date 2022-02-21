import React, { Children, useRef, createContext, useContext, useReducer } from "react";

const initialTodos = [
    {
      id: 1,
      text: '박재정 노래 듣기',
      done: true
    },
    {
      id: 2,
      text: '메리&달퐁 간식 주기',
      done: true
    },
    {
      id: 3,
      text: '식물 분갈이',
      done: false
    },
    {
      id: 4,
      text: '장보기',
      done: false
    }
  ];

function todoReducer(state,action){
    switch (action.type){
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}