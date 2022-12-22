import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  // get api implement
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((item) => {
        return <div>{item.email}</div>;
      })}
    </div>
  );
}
