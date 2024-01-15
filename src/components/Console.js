import react, {useState} from "react";

export const Console = ({textConsole}) => {

    return (
        <div className="console" dangerouslySetInnerHTML={{__html: textConsole}}></div>
    )

}