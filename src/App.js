import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        newItem: '',
        list
      });
    }
  }

  deleteItem(id) {
    const updatedList = this.state.list.filter(listItem => listItem.id !== id);
    this.setState({
      list: updatedList
    });
  }

  updateValue(newItem) {
    this.setState({
      newItem: newItem
    });
  }

  render() {
    return (
      <div className="container text-center">
        <img src={logo} height="150" alt="react todo app" className="main-icon" />
        <h1 className="main-title">To-Do List</h1>
        <div className="form-group row justify-content-center input">
          <div className="col-4 text-right">
            <input type="text" placeholder="enter a to do" className="form-control" required value={this.state.newItem} onChange={e => this.updateValue(e.target.value)}></input>
          </div>
          <div className="col-2 text-left">
            <button className="btn btn-primary" onClick={() => this.addItem(this.state.newItem)}>Add To-Do</button>
          </div>
        </div>
        <h3 className="title">Your To-dos</h3>
        <div className="list text-center">
          <ul>
            {this.state.list.map(item => {
              return (
                <li className="mb-10 row justify-content-center to-do">
                  <h5 className="col-4 align-self-center text-left">
                    <input type="checkbox" value={item.isDone} onChange={() => item.isDone=!item.isDone } className="mr-3"></input>
                {item.value}
              </h5>
                  <div className="col-2 text-left">
                    <button className="btn btn-danger" onClick={() => this.deleteItem(item.id)}>delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;