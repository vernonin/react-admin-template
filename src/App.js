import React from 'react'
import { BrowserRouter as Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { author } from './atternString'
import Router from './router'
import store from './store'
import AppTheme from './theme';
import './App.css';

function App() {
	console.info(`%c ${author}`, 'color: blue')
	return (
		<div className="App">
			<Routes>
				<Provider store={store}>
					<AppTheme>
						<Router />
					</AppTheme>
				</Provider>
			</Routes>
    </div>
  );
}

export default App
