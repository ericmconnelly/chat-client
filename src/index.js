import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import chat from "./reducers";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware";
import * as serviceWorker from './serviceWorker';

const logger = ({ getState }) => {
	return next => action => {
		console.log('will dispatch', action);

		const returnValue = next(action);

		console.log('state after dispatch', getState());

		return returnValue
	}
};

const middleware = applyMiddleware(promise(), thunk, logger);

let store = createStore(chat, middleware);

render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
