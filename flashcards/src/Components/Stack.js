import React from 'react';



class Stack extends React.Component {

    constructor(props){
        super(props);
       
        this.state = {
         

        }
    };



  
    getClass(){
        let className = 'bor stack'; 
        if (this.props.currentStack){
            if (this.props.currentStack.id === this.props.stack.id){
                className += ' active';
            }   
    
        }
        else{
            className = 'bor stack';
        }
        return className;
      
    }

    render() {

      
        

        return (
           
            <div className={this.getClass()} onClick={() => this.props.setCurrentStack(this.props.stack)}>
                <p>{this.props.stack.title} (<span>{this.props.stack.cards.length} cards</span>)</p>
               
            </div>
        )
    }




}
export default Stack;