import React from 'react';
import './App.css';

import { useQuery } from '@tanstack/react-query';
import { getAll } from './services/astronauts';

const App = () => {
  // const queryClient = useQueryClient();

  const queryResult = useQuery(['astronauts'], getAll);
  console.log('queryResult:', queryResult);

  const astronauts = queryResult.data || [];
  console.log('astronauts: ', astronauts);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
