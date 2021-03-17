import React from 'react';
import ReactDOM from 'react-dom';
import MonthlyViewChart from './MonthlyView/MonthlyView';

const App = () => (
  <React.StrictMode>
    <div id="App">
      <MonthlyViewChart />
    </div>
  </React.StrictMode>
);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
