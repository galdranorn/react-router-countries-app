import React from 'C:/Users/Wu/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import ReactDOM from 'C:/Users/Wu/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
