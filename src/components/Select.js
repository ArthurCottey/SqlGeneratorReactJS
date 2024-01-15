import react, {useState} from "react";

export const Select = ({addSelect}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addSelect(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Ajouté</button>
        </form>
    );

}