import React from "react";
import Header from "./Header";
import Main from "./Main";
import GroupTask from "./GroupTask";
const App = () => {
  return (
    <section className="app">
      <header >
        <Header />
      </header>
      <main className="main">
        <Main />
        <GroupTask />
      </main>
    </section>
  );
};
export default App;
