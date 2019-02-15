import React, { Component } from 'react'
import { connect } from "react-redux";
import { ChatRoomHeaderWrapper, ChatRoomHeaderInner, ChatRoomHeaderRoomTitle, ChatRoomHeaderNamesStyled, ChatRoomHeaderUserStyled } from "./styled";

const mapStateToProps = (state) => ({
	selectedRoomTitle : state.Rooms.selectedRoom.name,
	selectedRoomUsers: state.Rooms.selectedRoomUsers,
	username: state.User.username
});

const mapDispatchToProps =  () => ({});

const ChatRoomHeader = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ChatRoomHeaderComponent extends Component {
		render () {
			return (
				<ChatRoomHeaderWrapper>
					<ChatRoomHeaderInner>
						<ChatRoomHeaderRoomTitle> {this.props.selectedRoomTitle} </ChatRoomHeaderRoomTitle>
						<ChatRoomHeaderNamesStyled>
							{this.props.selectedRoomUsers.length > 0 ?
								<ChatRoomHeaderUserStyled>
									{this.props.username + ", "}
								</ChatRoomHeaderUserStyled> : ""
							}
							{this.props.selectedRoomUsers ? this.props.selectedRoomUsers.filter(person => person !== this.props.username).map((person) => <span key={person}>{person}, </span>) : ""}
						</ChatRoomHeaderNamesStyled>
					</ChatRoomHeaderInner>
				</ChatRoomHeaderWrapper>
			)
		}
	}
);

export default ChatRoomHeader;