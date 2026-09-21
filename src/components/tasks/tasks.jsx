import React from 'react'
import '/src/App.css'
export default function Active({ todos = [], deleteTodo, handleToggle, editingId, editText, setEditText, startEdit, saveEdit, cancelEdit }) {
    return (
        <div className='tasks' >
            <h1>Active</h1>
            <div className='tasklist'>
                {todos.map((todo) => (
                    <div className='task' key={todo.id}>
                        <input className='check' type='checkbox' checked={todo.Completed} onChange={() => handleToggle(todo.id)} />
                        {editingId === todo.id ? (
                            <input
                                type='text'
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                            />
                        ) : (
                            <span>{todo.text}</span>
                        )}
                            {new Date().toLocaleDateString()}
                            {editingId === todo.id ? (
                                <>
                                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                                    <button onClick={cancelEdit}>Cancel</button>
                                </>
                            ) : (
                                <button onClick={() => startEdit(todo)}>Edit</button>
                            )}
                            <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}