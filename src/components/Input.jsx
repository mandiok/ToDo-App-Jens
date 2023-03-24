import { FcOk } from "react-icons/fc";
import React, {useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import toastify from "./toastify";
import '../App.css'


function Import ({todos,setTodos, darkMode}) {

    const todoNameRef = useRef()

    const addTodo = () => {
        if (todoNameRef.current.value !== ""){
            setTodos([...todos,{
                text :  todoNameRef.current.value,
                id : uuidv4(),
                done: false
                }
            ]);
            toastify(`${todoNameRef.current.value} added`);
            todoNameRef.current.value="";                              
        }
       
    }

    return (
        <div>
        <input className={darkMode ? '' : 'darkModeInput'} name="todoInput" type="text" ref={todoNameRef} placeholder="new To-Do"></input>
        <button onClick={addTodo} name="button" type="button"><FcOk /></button>
        </div>
    );

    ;
};



export default Import;