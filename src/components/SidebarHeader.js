import React, { Component } from 'react'
import {connect} from "react-redux";
import { SidebarHeaderWrapperStyled, SidebarHeaderInnerStyled } from "./styled";

const mapStateToProps = (state) => ({
	username: state.User.username,
	loginTime: state.User.loginTime
});

const mapDispatchToProps =  (dispatch) => ({});

const SidebarHeader = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class SidebarHeaderComponent extends Component {
		constructor(props) {
			super(props)
			this.tick = this.tick.bind(this)
			this.state = {loginTime: 0}
		}

		tick() {
			this.setState({
				loginTime: Date.now() - this.props.loginTime
			})
		}

		componentDidMount() {
			setInterval(this.tick, 1000)
		}

		render() {

			const clockInMins = Math.round(((this.state.loginTime % 86400000) % 3600000) / 60000); // minutes

			if (clockInMins > 0) {
				return (
					<SidebarHeaderWrapperStyled>
						<SidebarHeaderInnerStyled>
							{this.props.username}
								<div>
									{clockInMins} minute(s)
								</div>
						</SidebarHeaderInnerStyled>
					</SidebarHeaderWrapperStyled>
				)
			}
			return (
				<SidebarHeaderWrapperStyled>
					<SidebarHeaderInnerStyled>
						{this.props.username}
					</SidebarHeaderInnerStyled>
				</SidebarHeaderWrapperStyled>
			)
		}
	}
);

export default SidebarHeader;