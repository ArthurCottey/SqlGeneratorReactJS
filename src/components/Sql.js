import react from "react";
import {useState} from "react";

export const Sql = () => {
    const [sqlRequest, setSqlRequest] = useState({
        select: ['id', 'name', 'surname', 'isAdmin'],
        from: 'users',
        where: ['name = "Arthur"', 'surname = "COTTEY"']
    })

    const sqlRequestBuilder = () => {
        let sqlRequestBuild = "";


        // SELECT builder
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

        // FROM builder
        if (sqlRequest.from) {
            sqlRequestBuild = sqlRequestBuild + " FROM " + sqlRequest.from
        }

        // WHERE builder
        if (sqlRequest.where.length > 0) {
            sqlRequestBuild = sqlRequestBuild + " WHERE " + sqlRequest.where[0]
            if (sqlRequest.where.length > 1) {
                for (let i = 1; i < sqlRequest.where.length; i++) {
                    sqlRequestBuild = sqlRequestBuild + " AND " + sqlRequest.where[i]
                }
            }
        }

        sqlRequestBuild = sqlRequestBuild + ";"

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