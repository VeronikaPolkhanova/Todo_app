import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import TodoList from './pages/todo_list';
import Nav from './components/nav';
import NonPage from './pages/none';

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/todo-list" element={<TodoList/>}/>
          <Route path="*" element={<NonPage/>}/>
      </Routes>
    </React.Fragment>
  );
}
export default App;
