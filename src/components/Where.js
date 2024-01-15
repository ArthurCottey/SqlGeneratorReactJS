import react, {useState} from "react";
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const Where = ({addWhere}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addWhere(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className="inputBox">
            <InputGroup className="mt-3">
                <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Ajouté un WHERE"
                    aria-label="Ajouté un WHERE"
                    aria-describedby="Ajouté un WHERE"
                />
                <Button variant="success" id="button-addon2" type="submit">
                    Ajouter
                </Button>
            </InputGroup>
        </form>
    );

}