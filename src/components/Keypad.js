import React from "react"

export default class Keypad extends React.Component {


	tickle = () => {
    console.log('Entering password...');
  }
 

	render(props){
		
		return(
			<input onKeyUp={this.tickle} type="password" />
		) 
		
	}
}


