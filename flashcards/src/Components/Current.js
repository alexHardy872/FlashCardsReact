import React from 'react';
import Card from './Card.js'

class Current extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    getData(){

    }

    render() {
        return (
            <div className="bor current">
                <p>Current Component</p>
                <Card />
            </div>
        )
    }




}
export default Current;