import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState({
            message: 'Thankyou'
        })
    }
    render(){
        return(
            <div>
             <h1>{this.state.message}</h1>
             <button onClick={() => this.changeMessage()}>Subscribe</button>
             <button onClick={this.changeMessage}>Subscribe2</button>
             </div>
        )
    }
}
export default Message