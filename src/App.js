import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
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

  handleDelete = index =>{
    let list = this.state.todoList.slice();
    list.splice(index, 1);
    this.setState({todoList: list});
  }

  addToArray = event => {
    const item = this.state.item;
    if((item !== '' && event.type === 'keypress' && event.key === 'Enter') || event.type === 'click'){
      let list = this.state.todoList;

      list.push({name: item, id: uuidv1()});
      this.setState({todoList: list});
      this.setState({item: ''});
    }
  }

  render() {
    const list = this.state.todoList.map((item, index) =>{
      return <Item key={item.id} name={item.name} index={index} onDelete={this.handleDelete}/>
    });

    return (
      <div className="App">
        <h1>TODO List</h1>
        <input type='text' value={this.state.item} onChange={this.onInputChange} onKeyPress={this.addToArray}/>
        <input type='button' value='ADD' onClick={this.addToArray}/>
        <br></br>
        <p>{'-'+this.state.item+'-'}</p>
        {list}
      </div>
    );
  }
}
  
export default App;
