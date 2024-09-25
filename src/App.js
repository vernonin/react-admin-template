import React from 'react'
import { BrowserRouter as Routes } from 'react-router-dom'
import { author } from './atternString'
import Router from './router'
import AppTheme from './theme';
import './App.css';

function App() {
	console.info(`%c ${author}`, 'color: blue')
	return (
		<div className="App">
			<AppTheme>
				<Routes>
					<Router />
				</Routes>
			</AppTheme>
    </div>
  );
}

export default App
