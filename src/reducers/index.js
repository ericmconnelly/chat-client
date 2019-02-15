import { combineReducers } from 'redux'
import User from './user'
import Rooms from './rooms'

const chat = combineReducers({
	User: User,
	Rooms: Rooms
});

export default chat;