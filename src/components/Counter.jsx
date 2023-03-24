function Counter ({counter}) {

    let text = "!";

    const zusatz = () => {
        if (counter.length > 4){
            text = ', Du faule Sau!'
        } else {
            text = '!';
        }
    }

    zusatz();

    return (
        <p style={{color: 'red'}}>Es sind noch {counter.length} Aufgaben offen{text}</p>
    );
};

export default Counter;