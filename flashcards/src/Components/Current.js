import React from 'react';
import Card from './Card.js'

class Current extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            currentStack: {},
            currentCardNum: 1,
            currentCard: {}
         }
    }

    componentDidMount(){
        this.getCurrentCard();
    }

    displayCard(){
       
    }

    getCurrentCard(){
       
    }


    render() {
        return (
            <div className="bor current">
                <p>Current Component {this.props.currentStack.title} </p>
                {/* <Card result={this.displayCard()}/> */}
                <div>
                <button className="default-btn">Another Card</button>
                </div>
               
            </div>
        )
    }




}
export default Current;