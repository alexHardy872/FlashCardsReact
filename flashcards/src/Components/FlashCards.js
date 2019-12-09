import React from 'react';
import axios from 'axios';
import Current from './Current.js';
import Collections from './Collections.js';


class FlashCards extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           collection: [],
           currentStack: {},
           currentCard: {},
           currentCardNum: 1
        }
    }

    componentDidMount(){      
        this.getData();     
    }

    getData(){
        axios.get('http://localhost:3000/Collections')
        .then((response) =>  {
            this.setState({collection: response.data});    
        })
    }

    postData(){
        axios.post('http://localhost:300/Collections', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  
    setCurrentStack(curStack){
        console.log("set current stack in flashcards from collections (FLASHCARD)", curStack);   
        let card = curStack.cards.filter(card => card.id === this.state.currentCardNum);
        this.setState({
            currentStack: curStack,
            currentCard: card[0]
        })
        //this.setState({currentCard: this.setCurrentCard(this.state.currentCardNum)})
        //this.setCurrentCard(this.state.currentCardNum - 1);
        console.log("current stack cards", curStack.cards.filter(card => card.id === 1));
      
    }

    setCurrentCard(cardNum){
        console.log("Card " + this.state.currentStack.cards);
        return this.state.currentStack.cards[cardNum];
    }

    currentStackTitle(){
        return this.state.currentStack.title === null ? "Please Select a Collection" : this.state.currentStack.title;
    }

    nextCard(){
        let newCard = this.state.currentStack.cards.filter(card => card.id === this.state.currentCardNum + 1)[0];
        this.setState({currentCardNum: this.state.currentCardNum + 1,
                        currentCard: newCard })
    }

    prevCard(){
        let newCard = this.state.currentStack.cards.filter(card => card.id === this.state.currentCardNum - 1)[0];
        this.setState({currentCardNum: this.state.currentCardNum - 1,
                        currentCard: newCard })
    }


    render() {
        console.log("current stack", this.state.currentStack);
      
        //console.log("current stack cards 0", this.state.currentStack.cards[0]);
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
              <div className="col-md-8 bor collections">
                {/* <Current currentStack={this.state.currentStack} currentCardNum={this.state.currentCardNum}/> */}
                
                <h4>{this.currentStackTitle()} ({this.state.currentCard.id}/)</h4>
                 <div className="bor card">
                     <p> word = "{this.state.currentCard.word}"</p>
                     <p> definition = "{this.state.currentCard.definition}"</p>
                 </div>
             
                 <div>
                    <button onClick={this.prevCard.bind(this)}>PREV</button>
                    <button onClick={this.nextCard.bind(this)}>NEXT</button>
                 </div>
               
              </div>
              <div className="col-md-4">
                <Collections allCards={this.state.collection} setCurrentStack={this.setCurrentStack.bind(this)} />
              </div>
            </div>
           
            </div>
        )
    }




}


export default FlashCards;