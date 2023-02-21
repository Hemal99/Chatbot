import React, { Component } from "react";
import { Widget, addResponseMessage, setQuickButtons } from "react-chat-widget";
import "./App.css";

import "react-chat-widget/lib/styles.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

const buttons = [
  { label: "first", value: "1" },
  { label: "second", value: "2" },
];

export class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to our store!");
    setQuickButtons(buttons);
  }

  handleNewUserMessage = (newMessage) => {
    try {
      console.log(`New message incoming! ${newMessage}`);
      // Now send the message throught the backend API

      fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: JSON.stringify({ message: newMessage }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((r) => {
          addResponseMessage(r.answer);
        });
    } catch (error) {
      console.log(error);
    }
  };

  handleQuickButtonClicked = (data) => {
    console.log(data);
    setQuickButtons(buttons.filter((button) => button.value !== data));
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          // profileAvatar={'text'}
          title="Polls"
          subtitle="Polls Demo"
        />
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}
