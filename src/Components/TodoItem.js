import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="todo-item-card">
            <div className="todo-item-content">
                <h4 className="todo-title">{todo.title}</h4>
                <p className="todo-desc">{todo.desc}</p>
            </div>
            <button className="btn btn-grad-danger" onClick={() => onDelete(todo)}>Delete</button>
        </div>
    );
}
