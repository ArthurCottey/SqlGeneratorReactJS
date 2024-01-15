import react from "react";
import {useState} from "react";

export const Sql = () => {
    const [sqlRequest, setSqlRequest] = useState({
        select: ['id', 'name', 'surname', 'isAdmin'],
        from: '',
        where: []
    })

    const sqlRequestBuilder = () => {
        let sqlRequestBuild = "";

        if (sqlRequest.select.length < 1) {
            sqlRequestBuild = "SELECT *"
        } else if (sqlRequest.select.length == 1) {
            sqlRequestBuild = "SELECT " + sqlRequest.select;
        } else if (sqlRequest.select.length > 1) {
            sqlRequestBuild = "SELECT " + sqlRequest.select[0];
            for (let i = 1; i < sqlRequest.select.length; i++) {
                sqlRequestBuild= sqlRequestBuild + ", " + sqlRequest.select[i]
            }
        }
        console.log(sqlRequestBuild)
    }

    const seeSql = () => {
        console.log(sqlRequest)
    }

    return (
        <div>

            <button onClick={() => sqlRequestBuilder()}>SQL Builder</button>
            <button onClick={() => seeSql()}>See SQL</button>
        </div>
    );
}