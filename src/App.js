import './App.css';
import Headline from './components/Headline';
import Todo from './components/Todo';
import Import from './components/Input';
import React, { useState } from 'react';
import Counter from './components/Counter';
import useLocalStorage from './components/customHooks/useLocalStorage';
import Switch from './components/Darkmode';

function App() {

const key = "todos"; 

const [todos, setTodos] = useLocalStorage(key);

const [darkMode, setDarkMode] = useState(true);


  return (
    <div className={darkMode ? 'App' : 'darkMode'}>
      <Switch darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <Headline />
      <Counter counter={todos}/>
      <Todo todos = {todos} setTodos={setTodos} darkMode = {darkMode}/>
      <Import todos={todos} setTodos={setTodos} darkMode = {darkMode}/>
    </div>
  );
}

export default App;



