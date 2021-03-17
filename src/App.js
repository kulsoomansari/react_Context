import React from 'react'
import './App.css';
import Myfunc from './Context';
import UserDetail from './UserDetail';


function App() {
    return (
    <div className="App">
      <Myfunc>
        <UserDetail />
      </Myfunc>
    </div>
  );
}

export default App;
