import React, { useState, useEffect } from "react";
import List from "./components/list";

import "./scss/main.scss";

function App() {
  const [ToDo, setToDo] = useState([]);
  const [state, setState] = useState([]);
  let [counter, setCounter] = useState([]);
  // const [edit, setEdit] = useState([]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  const Dates = [];
  const dateNow = Date.now();
  const id = String(dateNow);
  const current = new Date(dateNow);
  // console.log(typeof new Date().toISOString());
  const currentDay = current.getDay();
  const day = days[currentDay];
  const datead = new Intl.DateTimeFormat([]).format(current);

  // // new Intl.DateTimeFormat([], { dateStyle: "full" }).format(current)
  function counting() {
    function count() {
      let min = String(Math.trunc(time / 60)).padStart(2, 0);
      let sec = String(Math.trunc(time % 60)).padStart(2, 0);
      if (time === 0) {
        clearInterval(timer);
      }
      time--;
      console.log(`${min}:${sec}`);
    }

    let time = Number(counter * 60);
    count();
    const timer = setInterval(count, 1000);
    return timer;
  }
  function update() {
    const locale = navigator.language || navigator.userLanguage;
    const newDate = new Date().toISOString();
    Dates.push(newDate);
    counting();

    setState([...state, { data: ToDo, status: false, date: newDate, id: id }]);
  }
  function deletelist(id) {
    const cur = state.filter((el) => el.id !== id);
    return setState(cur);
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1>Todo App 😊💥</h1>
        <h2> Today is {day} 💖🎉 Have a nice day💔</h2>
        <div className="inputBox">
          <input
            type="text"
            placeholder="enter todo here"
            className="form"
            onChange={(e) => setToDo(e.target.value)}
            value={ToDo}
          />
          <input
            type="number"
            className="counter"
            placeholder="0"
            onChange={(e) => setCounter(e.target.value)}
            value={counter}
          />
          <span onClick={() => update()}>➕</span>
        </div>
        {state.map((el, i) => (
          <List
            key={i}
            element={el.data}
            date={datead}
            onDelete={deletelist}
            id={el.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
export default App;
