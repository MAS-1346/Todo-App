import React from 'react'
import '/src/App.css'
// import '../home/home'
export default function Completed({ filtered = [], deleteTodo, handleToggle, }) {
    return (
        <div className='tasks' >
            <h1>Completed</h1>
            <div>
                {filtered.map((todo) => (
                    <div className='Completedtask' key={todo.id}>
                        <div> <input className='check' type='checkbox' checked={todo.Completed} onChange={() => handleToggle(todo.id)} />
                            {todo.text}</div>
                        <div className='datebtn'>
                            {new Date().toLocaleDateString()}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}