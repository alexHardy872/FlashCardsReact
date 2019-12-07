import React from 'react';



class Stack extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          
          isActive: false
         

        }
    }

    markActive(){
        console.log("marked ");
        this.this.setState({isActive: true});
       
    }

    render() {

        let className = 'bor stack'; {
             if (this.props.isActive){
                 className += 'active';
             }   
        }

        return (
           
            <div className={className} onClick={this.markActive}>
                <p>{this.props.stack.title} (<span>{this.props.stack.cards.length} cards</span>)</p>
               
            </div>
        )
    }




}
export default Stack;