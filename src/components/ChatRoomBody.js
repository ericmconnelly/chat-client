import React, { Component }from 'react'
import { connect } from "react-redux"
import { ChatRoomBodyWrapper, OtherMessage, UserMessage, Author, HiddenAuthor, RightWrapper } from "./styled";

const mapStateToProps = (state) => ({
	messages: state.Rooms.selectedRoomMessages,
	username: state.User.username
});

const mapDispatchToProps =  () => ({});

const ChatRoomBody = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ChatRoomBodyComponent extends Component {

		render () {
			const  rooms = this.props.messages;
			return (
				<ChatRoomBodyWrapper id="chat-body">
					{(rooms) ?
						rooms.map((message) =>
							<RightWrapper pullRight={message.name === this.props.username} key={message.id}>
								{
									message.name === this.props.username ?
										<UserMessage>
											{message.message}
										</UserMessage> :
										<OtherMessage>
											{message.message}
										</OtherMessage>
								}
								{
									message.name === this.props.username ?
										<HiddenAuthor>
											{message.name}
										</HiddenAuthor> :
										<Author>
											{message.name}
										</Author>

								}
							</RightWrapper>) : null
					}
					</ChatRoomBodyWrapper>
			)
		}
	}
);

export default ChatRoomBody