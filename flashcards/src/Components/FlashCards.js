import React from 'react';
import axios from 'axios';
import Current from './Current.js';
import Collections from './Collections.js';


class FlashCards extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           collection: [],
           currentStack: [],
           currentCard: 0
        }
        //this.getData = this.getData.bind(this);
        console.log(this.state.collection);
    }

    componentDidMount(){
        
        this.getData();
        console.log("collection return", this.state.collection );
        
    }

    getData(){
        axios.get('http://localhost:3000/Collections')
        .then((response) =>  {
            this.setState({collection: response.data});    
        })
    }

  

    render() {
        return (
            <div className="container bor">
            <div className="row">
              <div className="col-lg-12">
                <header className="App-header">
                  {/*<img src={logo} className="App-logo" alt="logo" /> */}
                  <h1>FlashCards React</h1>
                </header>
              </div>    
            </div>
      
            <div className="row">
              <div className="col-md-8">
                <Current />
              </div>
              <div className="col-md-4">
                <Collections allCards={this.state.collection} />
              </div>
            </div>
           
            </div>
        )
    }




}


export default FlashCards;