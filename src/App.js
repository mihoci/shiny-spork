import React, { Component } from 'react';
import Item from './components/item';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      item: '',
      todoList: []
    }
  }

  onInputChange = event => {
    this.setState({item: event.target.value});
  }

  handleClick = event => {
    this.addToArray();
  }

  handleKeyPress = event => {
    console.log(this.event);
    if(event.key === 'Enter'){
      this.addToArray();
    }
  }

  handleDelete = index =>{
    let list = this.state.todoList.slice();
    list.splice(index, 1);
    this.setState({todoList: list});
  }

  addToArray = () => {
    if(this.state.item===''){
      return;
    }
    let list = this.state.todoList;
    list.push(this.state.item);
    this.setState({todoList: list});
    this.setState({item: ''});
  }

  render() {
    const list = this.state.todoList.map((item, index) =>{
      return <Item key={index} name={item} index={index} onDelete={this.handleDelete}/>
    });

    return (
      <div className="App">
        <h1>TODO List</h1>
        <input type='text' value={this.state.item} onChange={this.onInputChange} onKeyPress={this.handleKeyPress}/>
        <input type='button' value='ADD' onClick={this.handleClick}/>
        {list}
      </div>
    );
  }
}

export default App;
