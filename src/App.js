import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import { AddTodo } from "./Components/AddTodo";
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [
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
    ];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  return (
    <>
      <Header title="MyTodoList" searchBar={true} />
      <div className="app-container">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
