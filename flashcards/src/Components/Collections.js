import React from 'react';
import Stack from './Stack.js';


class Collections extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           allCards: [],
           currentStack: {}
        }
    }


   

    setCurrentStack(curStack){
        console.log("set current stack in collections from stack", curStack);   
        this.setState({currentStack: curStack})
        this.props.setCurrentStack(curStack);    
    }




    render() {
        return (
            <div className="bor collections">
                <p>Collections</p>
                {this.props.allCards.map((id) => {
                return <Stack currentStack={this.state.currentStack} setCurrentStack={this.setCurrentStack.bind(this)}  key={id.id} stack={id} />
                })}
            </div>
        )
    }




}
export default Collections;