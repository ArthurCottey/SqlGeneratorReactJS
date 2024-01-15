import react, {useState} from "react";
import {From} from './components/From';
import {Select} from './components/Select';
import {Console} from './components/Console';
import {Element} from './components/Element';
import {Where} from './components/Where';
import {v4 as uuidv4} from 'uuid';
import './App.css';

function App() {

  const [sqlRequest, setSqlRequest] = useState({
    select: [],
    from: '',
    where: []
  })

  const [requestBuildingTest, setSqlRequestBuildingTest] = useState("SELECT *;")

  const sqlRequestBuilder = () => {
    let sqlRequestBuild = "";

    // SELECT builder
    if (sqlRequest.select.length < 1) {
      sqlRequestBuild = "SELECT *"
    } else if (sqlRequest.select.length == 1) {
      sqlRequestBuild = "SELECT " + sqlRequest.select[0].value;
    } else if (sqlRequest.select.length > 1) {
      sqlRequestBuild = "SELECT " + sqlRequest.select[0].value;
      for (let i = 1; i < sqlRequest.select.length; i++) {
        sqlRequestBuild= sqlRequestBuild + ", " + sqlRequest.select[i].value
      }
    }

    // FROM builder
    if (sqlRequest.from) {
      sqlRequestBuild = sqlRequestBuild + " FROM " + sqlRequest.from
    }

    // WHERE builder
    if (sqlRequest.where.length > 0) {
      sqlRequestBuild = sqlRequestBuild + " WHERE " + sqlRequest.where[0].value
      if (sqlRequest.where.length > 1) {
        for (let i = 1; i < sqlRequest.where.length; i++) {
          sqlRequestBuild = sqlRequestBuild + " AND " + sqlRequest.where[i].value
        }
      }
    }

    sqlRequestBuild = sqlRequestBuild + ";"
    setSqlRequestBuildingTest(sqlRequestBuild);
  }



  const setFrom = (value) => {
    sqlRequest.from = value;sqlRequestBuilder()
  }

  const addSelect = (value) => {
    sqlRequest.select.push({
      id: uuidv4(),
      value: value
    })
    sqlRequestBuilder()
  }

  const deleteSelect = (id) => {

    sqlRequest.select = sqlRequest.select.filter(element => element.id !== id)
    sqlRequestBuilder()
  }

  const addWhere = (value) => {
    sqlRequest.where.push({
      id: uuidv4(),
      value: value
    })
    sqlRequestBuilder()
  }

  const deleteWhere = (id) => {

    sqlRequest.where = sqlRequest.where.filter(element => element.id !== id)
    sqlRequestBuilder()
  }

  const seeSql = () => {
    console.log(sqlRequest)
  }

  return (
      <div className="app">
        <Console textConsole={requestBuildingTest}></Console>
        <Select addSelect={addSelect}></Select>
        {sqlRequest.select.map((element, index) => (
            <Element value={element.value} id={element.id} key={index} deletee={deleteSelect}></Element>
        ))}
        <Where addWhere={addWhere}></Where>
        {sqlRequest.where.map((element, index) => (
            <Element value={element.value} id={element.id} key={index} deletee={deleteWhere}></Element>
        ))}
        <From setFrom={setFrom}></From>
        <button onClick={seeSql}>See SQL</button>
      </div>
  );
}

export default App;
