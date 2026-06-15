import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container my-4">
            <div className="glass-card">
                <h3 className="form-title text-center mb-4">Todos List</h3>
                {props.todos.length === 0 ? (
                    <div className="text-center py-4 text-secondary">
                        <p className="fs-5 mb-0">🎉 No todos to display! Enjoy your day!</p>
                    </div>
                ) : (
                    props.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
                )}
            </div>
        </div>
    );
}
