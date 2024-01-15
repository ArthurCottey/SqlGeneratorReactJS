import react from "react";

export const Element = ({value, id, deletee}) => {
    const handleClick = (key) => {
        deletee(key)
    }

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => handleClick(id)}>Supprimé</button>
        </div>
    )
}