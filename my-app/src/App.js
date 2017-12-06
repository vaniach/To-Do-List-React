import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      todos: [
        {id: 0, text: "task 1"},
        {id: 1, text: "task 2"},
        {id: 2, text: "task 3"}
      ],
      nextId: 3,
      editMode: false
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);

    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
  }

  addTodo(todoText) {
   let todos = this.state.todos.slice();
   todos.push({id: this.state.nextId, text:todoText});
   this.setState({
    todos: todos,
    nextId: ++this.state.nextId
   });
   console.log(this.state.todos)
  }

  removeTodo (id) {
    this.setState({
      todos : this.state.todos.filter((todo, index) => todo.id !== id)
    })
    console.log(this.state)
  }

  editTodo (id) {

    console.log(this.state.todos)
    this.setState ({
      editMode:true, 
      editId: id,
      newValue: this.state.todos[id].text})
  }

  handleChanges(event) {
    this.setState({
      newValue : event.target.value
    })

    console.log(this.value)
  }

  handleSaveChanges() {
    const todos = this.state.todos;
    todos[this.state.editId].text = this.state.newValue

    this.setState({
      todos,
      editMode: false
    })

    //console.log(this.state)
  }

  showInput(){
    if (this.state.editMode){
      return (
        <div>
          <input value = {this.state.newValue} onChange={this.handleChanges}/>
          <button  className="removeTodo" onClick={this.handleSaveChanges}>Save </button>
        </div>
      )
    }
    else {
      return ""
    }
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className = "App">
        <div className = "todo-wrapper">
           <Header />
           <TodoInput todoText="" addTodo={this.addTodo}/>
           <ul>
            {
             this.state.todos.map ((todo) => {
                return <TodoItem todo ={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} editTodo={this.editTodo} />  
              })  
            }
           </ul>
          {this.showInput()}
        </div>
      </div>
    );
  }
}

export default App;
