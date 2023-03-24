import { useState, useEffect } from "react";

const getItems = (localKey) => {
    if (localStorage.getItem(localKey) !== null)
    return JSON.parse(localStorage.getItem(localKey))
    else {
        return []
    }
}

function useLocalStorage (keyVal) {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState();
        
    window.addEventListener('load',() => {
        setCount(todos.length); 
    })

    useEffect(() => {
        if(count < 10 || !localStorage.getItem(keyVal)) {
            localStorage.setItem(keyVal, JSON.stringify(todos));
            setCount(todos.length)
            console.log(localStorage,count);
        }
    }, [todos,keyVal,count])

    useEffect(() => {
        const todosStore = getItems(keyVal);
        setTodos(todosStore)
    },[keyVal])
    

    return[todos, setTodos];
    
    
}



export default useLocalStorage