import ListGroup from 'react-bootstrap/ListGroup';
import Listitem from './Listitem';


const Todo = ({todos, setTodos, darkMode}) => {
    

    return(
        <ListGroup className='list'>
            {
                todos.map((el) => {
                    return <Listitem key={el.id} element={el} todos={todos} setTodos={setTodos} darkMode={darkMode}/>
                })
            }
        </ListGroup>
    )
}


export default Todo;
