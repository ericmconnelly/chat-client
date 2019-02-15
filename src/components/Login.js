import React, { Component } from 'react'
import { InputGroup, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import  { setUsername }from '../actions/UserAction';
import { connect } from "react-redux";
import history from "../history";
import { LoginContainerStyled, LoginInputStyled, LoginButtonStyled } from "./styled";

const mapStateToProps = () => ({});

const mapDispatchToProps =  dispatch => ({
	setUsername: (username) => dispatch(setUsername(username))
});

const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(
	class LoginComponent extends Component {
		state = {
			disabledLogin: true,
			userName: ""
		};

		handleInputChange = (event) => {
			if(event.target.value !== "") {
				this.setState({
					disabledLogin: false,
					userName: event.target.value
				});
			} else {
				this.setState({disabledLogin: true});
			}
		};

		goToChat = () => {
			const { setUsername } = this.props;

			setUsername(this.state.userName);
			sessionStorage.setItem('userName', this.state.userName);
			history.push('/chat');
		};

		render () {
			const { disabledLogin } = this.state;

			return (
				<LoginContainerStyled>
					<InputGroup>
						<LoginInputStyled>
							<Input onChange={this.handleInputChange} placeholder="Type your username..."/>
						</LoginInputStyled>
					</InputGroup>
					<LoginButtonStyled>
						<Button onClick={() => this.goToChat()} color="danger"  disabled={disabledLogin}>Join the Doordash Chat!</Button>
					</LoginButtonStyled>
				</LoginContainerStyled>
			)
		}
	}
);

export default Login;