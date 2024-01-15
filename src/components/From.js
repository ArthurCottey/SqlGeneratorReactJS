import react from "react";
import {useState} from "react";
import Form from 'react-bootstrap/Form';

export const From = ({setFrom}) => {

    const changeFrom = value => {
        setFrom(value)
    }

    return (
        <div className="inputBox mt-3">
            <Form.Control type="text" placeholder="FROM" onChange={(e) => changeFrom(e.target.value)} />

        </div>
    );
}