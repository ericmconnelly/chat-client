import React, { Component } from 'react'
import { connect } from "react-redux"
import axios from "axios/index";
import { FooterWrapper, FooterInputStyled, FooterButtonStyled } from "./styled";

const mapStateToProps = (state) => ({
	selectedRoom: state.Rooms.selectedRoom,
	username: state.User.username
});

const mapDispatchToProps =  () => ({});

const ChatRoomFooter = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ChatRoomFooterComponent extends Component {
		constructor(){
			super();
			this.state = {
				disabledSend : true,
				message : ""
			}
		}

		handleKeyPress = (event) => {
			if (event.key === 'Enter') {
				this.sendMessage();
			}
		};

		setMessage = (event) => {
			if(event.target.value !== "") {
				this.setState({
					disabledSend: false,
					message: event.target.value
				});
			} else {
				this.setState({disabledSend: true});
			}
		};

		sendMessage = () => {
			const message = {
				roomId: this.props.selectedRoom.id,
				name: this.props.username,
				message: this.state.message,
			};


			axios.post('http://localhost:8080/api/rooms/'+this.props.selectedRoom.id+'/messages', message)
				.then(() => {
					this.setState({
						message: "",
						disabledSend: true
					});

					const objDiv = document.getElementById("chat-body");
					objDiv.scrollTop = objDiv.scrollHeight;
				})
				.catch((err) => {
					console.log(err.status);
					console.log(err.code);
				});
			};

		render () {
			return (
				<FooterWrapper>
					<FooterInputStyled>
						<input className="" disabled={typeof this.props.selectedRoom.name === 'undefined'} value={this.state.message} onKeyPress={this.handleKeyPress} onChange={(e) => this.setMessage(e)} placeholder="Type a message.."/>
					</FooterInputStyled>
					<FooterButtonStyled>
						<button className="" disabled={this.state.disabledSend} onClick={() => this.sendMessage()}>Send</button>
					</FooterButtonStyled>
				</FooterWrapper>
			)
		}
	}
);

export default ChatRoomFooter