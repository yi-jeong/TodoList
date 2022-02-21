import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./Component/TodoCreate";
import TodoHead from "./Component/TodoHead";
import TodoList from "./Component/TodoList";
import TodoTemplate from "./Component/TodoTemplate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`

function App() {
  return (
    <>
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    </>
  );
}

export default App;
