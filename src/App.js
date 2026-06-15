import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables",
    },
    {
      sno: 2,
      title: "Go to the Cinema",
      desc: "You need to go to the Cinema to watch Rajasaab",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to bath",
    }
  ]);

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  return (
    <>
      <Header title="MyTodoList" searchBar={true} />
      <Footer />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
