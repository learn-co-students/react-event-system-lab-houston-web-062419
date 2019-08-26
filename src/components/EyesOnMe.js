
import React from "react"

export default class EyesOnMe extends React.Component {


tickle = () => {
    console.log('Good!');
  }

  tickle1 = () => {
    console.log('Hey! Eyes on me!');
  }
render(props){
		
		return(
			<button onFocus={this.tickle} onBlur = {this.tickle1} ></button>
		) 
		
	}

}
