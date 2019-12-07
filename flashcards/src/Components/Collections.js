import React from 'react';
import Stack from './Stack.js';


class Collections extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           allCards: [],
           currentStack: 0
        }
    }


   

    


    render() {
        return (
            <div className="bor current">
                <p>Collections</p>
                {this.props.allCards.map((id, title, cards) => {
                return <Stack className="stack" key={id.id} stack={id} />
                })}
            </div>
        )
    }




}
export default Collections;