import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TopicsApi, useDevServer } from "kuroco";

useDevServer(true);

function App() {
  document.title = "React & Kuroco SDK!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rendering topicsIDs from dummyAPI.<br></br>
          Please run <code>kuroco servedummy</code> before serve this App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        {useTopicsList().map(({ topics_id }, idx) => (
          <div key={idx}>
            <span>{`${topics_id}`}</span>
            <br></br>
          </div>
        ))}
      </header>
    </div>
  );
}

function useTopicsList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getTopics() {
      const topicsApi = new TopicsApi();
      const responseRaw = await topicsApi.rcmsApiFeedsGet({});
      const responseFeed = await responseRaw.value();

      setList([...list, ...responseFeed.list]);
    }

    if (list.length === 0) {
      getTopics();
    }
  }, [list]);

  return list;
}

export default App;
