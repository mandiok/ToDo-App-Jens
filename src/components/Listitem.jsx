import {IoIosTrash} from 'react-icons/io';
import {VscEdit} from 'react-icons/vsc';
import {MdDone} from 'react-icons/md';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Fragment } from 'react';
import { useRef } from 'react';
import '../App.css';


const Listitem = ({element, todos, setTodos, darkMode}) => {

    const idTodo = useRef();


    const deleteTodo = () => {
        //console.info(idTodo.current.id)
        setTodos(todos.filter(todo => idTodo.current.id !== todo.id ? todo : null));
    };

    const changeTodo = () => {
        const newText = prompt("Todo ändern zu:");
        if (newText !== ""){
            setTodos(todos.filter(todo => idTodo.current.id === todo.id ? todo.text = newText : todo));
        }
    };

    const toogleTodo = () => {
        setTodos(todos.map((el) => {
            if (el.id === element.id) {
                //console.log("toggle-match");
                el.done = !el.done;
            }
            return el;
        }))
    }

    const theme = () => {

        let theme = ''

        if (element.done && !darkMode){
            theme = 'darkModeInput checkedTodo'
        } else if (element.done){
            theme = 'checkedTodo'
        } else if (!darkMode) {
            theme = 'darkModeInput'
        }
        


        return theme;
    }


    return(
        <Fragment>
            <ListGroup.Item className={theme()} ref={idTodo} id={element.id}>{element.text}
            <button onClick={changeTodo} className='buttonChange'><VscEdit/></button>
            <button onClick={deleteTodo} className='buttonDelete'><IoIosTrash /></button>
            <button onClick={toogleTodo} className='buttonToggle'><MdDone /></button>
            </ListGroup.Item>            
        </Fragment>
    )
}

export default Listitem;


//JSON.parse()
//JSON.stringify()
//setItem / getItem / removeItem
