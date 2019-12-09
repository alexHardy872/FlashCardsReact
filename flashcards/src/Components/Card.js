import React from 'react';



class Card extends React.Component {

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="bor card">
                <p>Card {this.props.result}</p>
               
            </div>
        )
    }




}
export default Card;