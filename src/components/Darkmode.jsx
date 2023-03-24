import Form from 'react-bootstrap/Form';

function Switch({darkMode, setDarkMode}) {

    const handleChange = () => {
        setDarkMode(!darkMode);
    }

    return (
      <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Darkmode"
          onChange={handleChange}
        />
      </Form>
    );
  }
  
  export default Switch;