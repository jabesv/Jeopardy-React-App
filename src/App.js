//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GetQuestion from './components/GetQuestion';
import Score from './components/Score';

class App extends Component {
  state = {
    baseURL:'http://jservice.io/api/random',
    score: 0,
    category: "",
    value: 0,
    answer: "",
    question: "",
    isVisible: false,
  }

handleIncrease = (event) => {
  event.preventDefault()
  this.setState({ score: this.state.score + this.state.value })
} 

handleDecrease = (event) => {
  event.preventDefault()
  this.setState({ score: this.state.score - this.state.value })
}

handleChange = (event) => {
  this.setState({ [event.target.id]: event.target.value })
}

handleReveal = (event) => {
  event.preventDefault()
  this.setState({
    isVisible: (this.isVisible = !this.isVisible),
  })
}
  
handleGetQuestion = (event) => {
  event.preventDefault()
  this.setState(
    {
      questionURL:this.state.baseURL, 
      isVisible: false,
    },

    () => {
      fetch(this.state.questionURL)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          category: json[0].category.title,
          value: json[0].value,
          answer: json[0].answer,
          question: json[0].question,
        })
      )
    }
  )
}
  
  


handleReset = () => {
  window.location.reload(false)
}

  render(){
    return (
      <div className="App">
        <h1 className='welcome'>Welcome To Jeopardy</h1>
      
      <Score 
        handleDecrease={this.handleDecrease}
        handleIncrease={this.handleIncrease}
        handleReset={this.handleReset}
        score={this.state.score}
      />  
      
      <GetQuestion 
        handleGetQuestion={this.handleGetQuestion}
        handleReveal={this.handleReveal}
        category={this.state.category}
        value={this.state.value}
        answer={this.state.answer}
        question={this.state.question}
        isVisible={this.state.isVisible}
      />

      </div>
    );
  }
  
}

export default App;
