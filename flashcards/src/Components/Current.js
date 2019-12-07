import React from 'react';
import Card from './Card.js'

class Current extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    renderCard(i){
        return <Card />;
    }


    render() {
        return (
            <div className="bor current">
                <p>Current Component</p>
                <Card />
                <div>
                <button className="default-btn">Another Card</button>
                </div>
               
            </div>
        )
    }




}
export default Current;