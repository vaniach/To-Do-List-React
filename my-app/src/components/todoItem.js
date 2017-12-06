import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
	constructor(props){
		super(props);
	}

	removeTodo(id){
		this.props.removeTodo(id); 
	}

	editTodo(id){
		this.props.editTodo(id);
	}


	render() {
		return (
			<div className="todoWrapper">
				<button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}> remove </button> 
				<button className="removeTodo" onClick={(e) => this.editTodo(this.props.id)}> edit </button>
				{this.props.todo.text}
			</div>
		)
	}
}