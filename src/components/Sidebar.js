import React, { Component } from 'react'
import SidebarHeader from './SidebarHeader.js'
import SidebarBody from './SidebarBody.js'
import { SidebarStyled } from "./styled";

class Sidebar extends Component {
	render () {
		return (
			<SidebarStyled>
				<SidebarHeader />
				<SidebarBody />
			</SidebarStyled>
		)
	}
}

export default Sidebar