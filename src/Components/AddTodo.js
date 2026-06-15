import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <div className="glass-card">
                <h3 className="form-title">Add a TODO</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label custom-label">Todo Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="form-control custom-input" 
                            id="title" 
                            placeholder="Enter todo title..." 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label custom-label">Todo Description</label>
                        <input 
                            type="text" 
                            value={desc} 
                            onChange={(e) => setDesc(e.target.value)} 
                            className="form-control custom-input" 
                            id="desc" 
                            placeholder="Enter todo description..." 
                        />
                    </div>
                    <button type="submit" className="btn btn-grad-primary w-100">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
