import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterHandle from './router';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <RouterHandle />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
