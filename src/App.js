import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //Copying current list of items
    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with the new list and reset newItem input

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //copy the current items

    const list = [...this.state.list];

    //filter out which item going to be deleted
    const updatetedList = list.filter(item => item.id !== id);

    this.setState({ list: updatetedList });
  }

  render() {
    return (
      <div className="App">
        <div>
          Add an item..
          <br />
          <input
            type="text"
            placeholder="Type an item"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Delete
                  </button>
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
