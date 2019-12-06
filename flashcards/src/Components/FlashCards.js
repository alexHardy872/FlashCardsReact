import React from 'react';
import axios from 'axios';
import Current from './Current.js';
import Collections from './Collections.js';


class FlashCards extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    componentDidMount(){
        console.log("did mount");
        this.getData();
    }

    getData(){
        axios.get('http://localhost:3000/Collections')
        .then(function (response) {
            console.log(response.data);
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
                <Collections />
              </div>
            </div>
            </div>
        )
    }




}
export default FlashCards;