import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Header pageTitle='Reducer Todo List' />
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
