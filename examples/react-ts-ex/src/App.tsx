import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TopicsService } from 'kuroco/services/TopicsService';
import { Auth } from 'kuroco/core/Auth';

const App: React.FC = () => {
  document.title = "React+TS & Kuroco SDK!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rendering topicsIDs from the server.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div style={{ marginBottom: '40px' }}>
        {useTopicsList().map(({ topics_id }, idx) => (
          <div key={idx}>
            <span>{`${topics_id}`}</span>
            <br></br>
          </div>
        ))}
        </div>
      </header>
    </div>
  );
};

function useTopicsList() {
  const [list, setList] = useState([] as any[]);

  useEffect(() => {
    async function getTopicsList() {
      await Auth.login({
        requestBody: { email: 'test', password: 'qwer1234' },
      })
      return await TopicsService.getTopicsServiceRcmsApi1Topics1({});
    }
    async function getTopics() {
      const res = await getTopicsList()
      setList([...list, ...res.body.list]);
    }

    if (list.length === 0) {
      getTopics();
    }
  }, [list]);

  return list;
}

export default App;
