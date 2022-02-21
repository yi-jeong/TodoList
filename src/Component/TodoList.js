import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 1.5em 2.3em;
    padding-bottom: 3.5em;
    overflow-y: auto;
`

function TodoList(){
    const todos = useTodoState();

    return(
        <TodoListBlock>
            {todos.map(todo=>(
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </TodoListBlock>
    ) 
}

export default TodoList;