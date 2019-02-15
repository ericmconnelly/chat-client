const User = (state = {username : sessionStorage.getItem('userName') || "anonymous", loginTime: Date.now()}, action) => {
	switch(action.type) {
		case 'SET_USERNAME':
			return {...state, username: action.payload, loginTime: Date.now()}
		case 'GET_USERNAME':
			return state;
		default:
			return state;
	}
};

export default User

