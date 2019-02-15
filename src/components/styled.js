import styled from "styled-components";

export const ChatWrapper = styled.div`
 	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
`;

export const ChatRoomWrapper = styled.div`
 	flex: 1;
`;

export const PlaceHolder = styled.div`
	font-size: 30px;
	opacity: 0.5;
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const ChatRoomBodyWrapper = styled.div`
	height: 78%;
	background-color: #EFF1F2;
	overflow: scroll;
`;

export const OtherMessage = styled.div`
	border: 0px solid #189d0e;
	border-radius: 32px;
	color: black;
	display: inline-block;
	margin: 10px 0 0;
	padding: 9px 16px;
	margin: 1% 1% 0% 1%;
	background-color: white;
	max-width: 50%;
`;

export const UserMessage = styled.div`
	border: 0px solid #189d0e;
	border-radius: 32px;
	color: white !important;
	display: inline-block;
	margin: 10px 0 0;
	padding: 9px 16px;
	text-decoration: none !important;
	margin: 1% 1% 0% 1%;
	background-color: #FF1940;
	max-width: 50%;
	text-align: left;
`;

export const Author = styled.div`
	border-radius: 32px;
	padding: 5px 16px 16px 16px;
	display: table;
	color: #7A869A;
`;

export const HiddenAuthor = styled.div`
	display: none;
`;

export const RightWrapper = styled.div`
	text-align: ${props => props.pullRight ? "right" : ""};
`;

export const FooterWrapper = styled.div`
	height: 22%;
	background-color: white;
	padding: 20px;
	display: flex;
`;

export const FooterInputStyled = styled.div`
	input {
		height: 40px;
		font-size: 14px;
		padding-left: 20px;
		box-sizing: border-box;
		width: 100%
	}
	width: 90%;
`;

export const FooterButtonStyled = styled.div`
	display: inline-block;
	width: 10%;
  text-align: center;
	
	button {	
		color: blue;
    background-color: transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    height: 40px;
    font-weight: bold;
    width: 100%;
    font-size: 14px;
	}
`;

export const ChatRoomHeaderWrapper = styled.div`
	height: 10%;
	background-color:white;
`;

export const ChatRoomHeaderInner = styled.div`
	position: relative;
	top: 50%;
	transform: translate(0%, -50%);
	transform: translate(0%, -50%);
	margin: 20px auto;
	text-align: center;
`;

export const ChatRoomHeaderRoomTitle = styled.div`
	font-size: 2em; 
`;

export const ChatRoomHeaderNamesStyled = styled.div`
	padding: 0.5em;
`;

export const ChatRoomHeaderUserStyled = styled.span`
	color: #FF1940;
`;

export const LoginContainerStyled = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%);
	transform: translateX(-50%);
	width: 25%;
`;

export const LoginInputStyled = styled.div`
	input {
		width: 100%;
		height: 40px;
		font-size: 14px;
		padding-left: 20px;
		box-sizing: border-box;
	}
`;

export const LoginButtonStyled = styled.div`
	button {	
		color: white;
    margin-top: 20px;
    background-color: #FF1940;
    height: 40px;
    font-weight: bold;
    width: 100%;
    font-size: 14px;
	}
	
	button:disabled {
  	background: #dddddd;
  }
}
`;

export const SidebarStyled = styled.div`
	width: 300px;
	background-color: #FF1940;
	float: left;
 	flex: 0 auto;
 	height: 100%
`;

export const SidebarBodyWrapperStyled = styled.div`
	bottom: 0;
	height: auto;
	color: white;
`;

export const SidebarBodyRoomStyled = styled.div`
	padding-left: 30px;
	height: 60px;
	line-height: 60px;
	
	&:hover {
    background-color: #800D20
  }
  
	background-color: ${props => props.isSelected ? "#800D20" : ""}
`;

export const SidebarHeaderWrapperStyled = styled.div`
	height: 12vh;
	padding-left: 30px;
	color: white;
`;

export const SidebarHeaderInnerStyled = styled.div`
	position: relative;
	top: 50%;
	transform: translate(0%, -50%);
	margin: 0 auto;
`;