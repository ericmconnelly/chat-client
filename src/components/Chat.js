import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import { setRooms } from "../actions/RoomAction";
import Sidebar from "./Sidebar";
import ChatRoom from "./ChatRoom";
import { ChatWrapper } from "./styled";

const mapStateToProps = () => ({});

const mapDispatchToProps =  dispatch => ({
	setRooms: (rooms) => dispatch(setRooms(rooms))
});

const Chat = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ChatComponent extends Component {
		state = {
			selectedRoom: null
		};

		componentDidMount() {
			axios.get('http://localhost:8080/api/rooms')
				.then((results) => {
					this.props.setRooms(results.data)
				});
		}

		changeRoom(room) {
			this.setState({selectedRoom : room.name});
		}

		render () {
			return (
				<ChatWrapper>
					<Sidebar />
					<ChatRoom />
				</ChatWrapper>
			)
		}
	}
);

export default Chat;