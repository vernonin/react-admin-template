import React from 'react'
import { BrowserRouter as Routes } from 'react-router-dom'
import { beauty } from './atternString'
import Router from './router'

import './App.css';

function App() {
  console.info(`%c ${beauty}`, 'color: red')
  return (
    <div className="App">
			<Routes>
				<Router />
			</Routes>
    </div>
  );
}

export default App
