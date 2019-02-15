import React, {Component, Fragment} from 'react'
import ChatRoomHeader from './ChatRoomHeader.js'
import ChatRoomBody from './ChatRoomBody.js'
import ChatRoomFooter from './ChatRoomFooter.js'
import connect from "react-redux/es/connect/connect";
import { ChatRoomWrapper, PlaceHolder} from "./styled";

const mapStateToProps = (state) => ({
	selectedRoom: state.Rooms.selectedRoom
});

const mapDispatchToProps =  () => ({});

const ChatRoom = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class ChatRoomComponent extends Component {
		render () {
			return (
				<ChatRoomWrapper>
					{
						this.props.selectedRoom.name ?
							<Fragment>
								<ChatRoomHeader />
								<ChatRoomBody />
								<ChatRoomFooter />
							</Fragment> :
							<PlaceHolder>Please select a chat room</PlaceHolder>
					}
				</ChatRoomWrapper>
			)
		}
	}
);

export default ChatRoom;

