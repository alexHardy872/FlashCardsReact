import React from 'react';
import Stack from './Stack.js';


class Collections extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <div className="bor current">
                <p>Collections</p>
                <Stack />
            </div>
        )
    }




}
export default Collections;