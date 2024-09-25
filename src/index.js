import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

// markdown插件的样式
import 'react-mde/lib/styles/css/react-mde-all.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
