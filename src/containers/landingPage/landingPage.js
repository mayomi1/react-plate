/**
 * Created by mayomi on 1/22/19 by 2:40 AM.
 */
import React, {Component, Fragment} from 'react'
import {AuthButton} from "../../components";

class LandingPage extends Component{
	render (){
		return(
			<Fragment>
				<h1>Your page</h1>
				<AuthButton label='your button label'/>
			</Fragment>
		)
	}
}

export default LandingPage;
