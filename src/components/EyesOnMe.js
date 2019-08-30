// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    onBlur = (e) => {
    console.log('Hey! Eyes on me!')
    }

    onFocus = (e) => {
        console.log('Good!')
        }


    render() {
        return (
            <div>
                <button onFocus = {(e)=> this.onFocus(e)} onBlur={(e)=> this.onBlur(e)}> Button </button>
            </div>
        )
    }
}

