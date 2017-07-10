import React, { Component } from 'react';
import './main.css';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kitties: [ 'Tom', 'Bernard', 'Wiskers', 'Archibald'],
            kitty: ''
        }

        this.inputValue = this.inputValue.bind(this)
        this.addKitty = this.addKitty.bind(this)
    }

    inputValue(event) {
        this.setState({
            kitty: event.target.value
        })
  
    }

    addKitty() {
        this.setState({
            kitties: [...this.state.kitties, this.state.kitty],
            kitty: ''
        })
        
    }

    render(){
        const kittiesArray = this.state.kitties.map((kitty, i) => (
         <h2 key={i}> { kitty } </h2>
        ))
    


        return (
           <div className='main'>
                <input onChange={ this.inputValue } value={ this.state.kitty } />
                <button onClick={ this.addKitty }> Add Kitty </button>

                { kittiesArray }
           </div>
        )
    }
}

export default Main