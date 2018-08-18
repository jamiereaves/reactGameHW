import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './components/Card';
import Wrapper from "./components/Wrapper";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cards from "./cards.json";
import './App.css';


class App extends Component {
  //set this.state.cards to the cards.json array
  state = {
    cards,
    score: 0,
    highScore: 0,
    message: "Click on any image to earn points. Click an image twice, though & your game is over. Remember, when you play the game of beans, you win, or you die--there is no middle ground!"
  };

  clickHandler = (x) => {
    const targetCard = this.state.cards.filter(card => card.id === x);
    console.log(targetCard[0]);
    console.log("name: " + targetCard[0].name + " || clicked: " + targetCard[0].clicked);
    //check to see if the card has been clicked
      if (targetCard[0].clicked===false){
          //if it hasn't, change the value of clicked to true, increase score, increase high score if applicable, & change message state
          targetCard[0].clicked=true;
          this.setState({score: this.state.score + 1}, function () {
            if (this.state.score > this.state.highScore) {
              this.setState({highScore: this.state.score}, function () {
                console.log("high score: " + this.state.highScore);
              });
            }
            console.log("score: " + this.state.score)});
          this.setState({message: "You guessed correctly!"}, function () {
            console.log(this.state.message);
          })
        }
        //if it has, reset the values of all "clicked" cards, reset score to 0, & change message state
        else{
          console.log("LOSER LOSER LOSER");
          const clickedCards = this.state.cards.filter(card => card.clicked === true);
          for (let i=0; i<clickedCards.length; i++) {
            clickedCards[i].clicked = false;
          };
          this.setState({score: 0}, function () {
            console.log(this.state.score);
            console.log(this.state.highScore);
          });
          this.setState({message: "You already chose " + targetCard[0].name +"...press any image to start again!"}, function () {
            console.log(this.state.message);
          })
  
        }
        console.log("name: " + targetCard[0].name + " || clicked: " + targetCard[0].clicked);
        for (let i = cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
        };
        //set this.state.cards to the new cards array
        this.setState({cards});

  }; 

  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/
        <div className="container-fluid">
        <Wrapper>
          <Header className="d-flex justify-content-between">
            <span>SCORE: {this.state.score}  ||  HIGH SCORE: {this.state.highScore}</span>
          </Header>
          <Message>{this.state.message}</Message>
            {this.state.cards.slice(0,12).map(card => (
            <Card
              clickHandler={this.clickHandler}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
          <Footer>{<img src={logo} className="App-logo" alt="logo" />}</Footer>
        </Wrapper>
      </div>
    );
  }
}

export default App;
