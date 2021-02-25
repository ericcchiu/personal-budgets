import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  let a = 24;
  a = 25;
  return a;
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
