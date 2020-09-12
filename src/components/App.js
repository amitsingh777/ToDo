import React from "react";
import Header from "./Header";
import Main from "./Main";
import Task from "./Task";
const App = () => {
  return (
    <section className="app">
      <header >
        <Header />
      </header>
      <main>
        <Main />
        <Task />
      </main>
    </section>
  );
};
export default App;
