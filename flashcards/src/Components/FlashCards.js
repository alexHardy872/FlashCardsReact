import React from 'react';
import axios from 'axios';
import Current from './Current.js';
import Collections from './Collections.js';
import NewCard from './NewCard.js';


class FlashCards extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           collection: [],
           currentStack: {},
           currentCard: {},
           currentCardNum: 1,
           cardPos: "front"
        }
    }

    componentDidMount(){      
        this.getData();     
    }

    getData(){
        axios.get('http://localhost:3000/collections')
        .then((response) =>  {
            this.setState({collection: response.data});    
        })
    }

    postData(newCard){
        debugger;
        let stack = this.currentStack;
        let cards = this.currentStack.cards;
        cards.push(newCard);
        console.log(cards);
        
        axios.put('http://localhost:3000/collections/'+stack.id, {
            "id": stack.id,
            "title": stack.title,
            "cards": cards,


          
          })
          .then(function (response) {
            console.log("response?"+ response);
            console.log("responsedata? "+response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    createCard(word, definition){
       
        let newId = this.currentStack.cards.length +1;
        let newCard = {
            "id" : newId,
            "word" : word,
            "definition" : definition
        }
        console.log(newCard);
        this.postData(newCard);
    }

  
    setCurrentStack(curStack){
        //console.log("set current stack in flashcards from collections (FLASHCARD)", curStack);   
        let card = curStack.cards.filter(card => card.id === this.state.currentCardNum);
        this.setState({
            currentStack: curStack,
            currentCard: card[0]
        })
        //this.setState({currentCard: this.setCurrentCard(this.state.currentCardNum)})
        //this.setCurrentCard(this.state.currentCardNum - 1);
        //console.log("current stack cards", curStack.cards.filter(card => card.id === 1));
      
    }

    setCurrentCard(cardNum){
        //console.log("Card " + this.state.currentStack.cards);
        return this.state.currentStack.cards[cardNum];
    }

    currentStackTitle(){
        return this.state.currentStack.title === null ? "Please Select a Collection" : this.state.currentStack.title;
    }

    nextCard(){

        let length = this.state.currentStack.cards.length;
        let pos = this.state.currentCardNum;
        let card = this.state.currentCard;
        if (this.state.currentCardNum === length){
            card = this.state.currentStack.cards.filter(card => card.id === 1)[0];
            pos = 1;
        }
        else{
            card = this.state.currentStack.cards.filter(card => card.id === this.state.currentCardNum + 1)[0];
            pos = pos + 1;
        }   
        this.setState({currentCardNum: pos,
            currentCard: card })
    }

    prevCard(){
        let length = this.state.currentStack.cards.length;
        let pos = this.state.currentCardNum;
        let card = this.state.currentCard;
        if (this.state.currentCardNum === 1){
            card = this.state.currentStack.cards.filter(card => card.id === length)[0];
            pos = length;
        }
        else{
            card = this.state.currentStack.cards.filter(card => card.id === this.state.currentCardNum - 1)[0];
            pos = pos - 1;
        }   
        this.setState({currentCardNum: pos,
            currentCard: card })
    }

    getLength(){

        try{           
             return this.state.currentStack.cards.length;
        }
        catch{
            return 0;
        }

        
        
    }

    flipCard(){
        if (this.state.cardPos === "front"){
            this.setState({cardPos: "back"});
        }else{
            this.setState({cardPos: "front"});
        }
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
                
                <h4>{this.currentStackTitle()} ({this.state.currentCard.id}/{this.getLength()})</h4>
                 <div className="bor card" onClick={this.flipCard.bind(this)}>
                     {this.state.cardPos === "front" &&
                        
                        <p>{this.state.currentCard.word}</p>
    
                     }
                       {this.state.cardPos === "back" &&
                        <p>{this.state.currentCard.definition}</p>    
                     }
                    
                 </div>
             
                 <div>
                    <button onClick={this.prevCard.bind(this)}>PREV</button>
                    <button onClick={this.nextCard.bind(this)}>NEXT</button>
                 </div>
                
               <NewCard createCard={this.createCard} currentStack={this.state.currentStack} postData={this.postData}/>
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