import react, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Select = ({addSelect}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addSelect(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className="inputBox">

            <InputGroup className="mt-3">
                <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Ajouté un SELECT"
                    aria-label="Ajouté un SELECT"
                    aria-describedby="Ajouté un SELECT"
                />
                <Button variant="success" id="button-addon2" type="submit">
                    Ajouté
                </Button>
            </InputGroup>


        </form>



    );

}