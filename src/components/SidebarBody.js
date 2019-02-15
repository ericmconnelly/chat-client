import React, { Component } from 'react'
import { connect } from "react-redux"
import axios from "axios/index";
import { setSelectedRoomUsers, setSelectedRoomMessages, setSelectedRoom } from "../actions/RoomAction"
import  io from 'socket.io-client';
import { SidebarBodyWrapperStyled, SidebarBodyRoomStyled } from "./styled";

const socket = io.connect('localhost:8080', {
}).on('connect',
	function(){
	}).on('error',
	function(err){
		console.log('err', err)
	});

const mapStateToProps = (state) => ({
	rooms: state.Rooms.rooms,
	selectedRoom: state.Rooms.selectedRoom
});

const mapDispatchToProps =  (dispatch) => ({
	setSelectedRoomMessages: (messages) => dispatch(setSelectedRoomMessages(messages)),
	setSelectedRoomUsers: (users) => dispatch(setSelectedRoomUsers(users)),
	setSelectedRoom: (rooms) => dispatch(setSelectedRoom(rooms))
});

const SidebarBody = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class SidebarBodyComponent extends Component {
		constructor(props){
			super(props);
			this.state = {
				users : []
			}
		}

		componentDidMount(){
			socket.on('messages updated', () => {
				this.getUsers(this.props.selectedRoom)
				this.getMessages(this.props.selectedRoom)
			})
		}

		changeRoom(room){
			this.props.setSelectedRoom(room);
			this.getUsers(room)
			this.getMessages(room)
		}

		getUsers(room) {
			axios.get('http://localhost:8080/api/rooms/'+room.id )
				.then((results) => {
					this.props.setSelectedRoomUsers(results.data.users);
				});
		}

		getMessages(room) {
			axios.get('http://localhost:8080/api/rooms/'+room.id+"/messages")
				.then((results) => {
					this.props.setSelectedRoomMessages(results.data);
				});
		}

		render () {

			const listItems = this.props.rooms.map((elem) =>
				<SidebarBodyRoomStyled isSelected={this.props.selectedRoom.name === elem.name} onClick={() => this.changeRoom(elem)} key={elem.id}>{elem.name}</SidebarBodyRoomStyled>
			);

			return (
				<SidebarBodyWrapperStyled>
					{listItems}
				</SidebarBodyWrapperStyled>
			)
		}
	}
);

export default SidebarBody;