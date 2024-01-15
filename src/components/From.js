import react from "react";
import {useState} from "react";

export const From = ({setFrom}) => {

    const changeFrom = value => {
        setFrom(value)
    }

    return (
        <div>

            <input type="text" placeholder="FROM" onChange={(e) => changeFrom(e.target.value)}/>

        </div>
    );
}