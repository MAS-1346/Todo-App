import '/src/App.css'
import React, { useEffect, useState } from 'react'
import Completed from '../completed/completed.jsx'
import Tasks from '../tasks/tasks.jsx'
import Nav from '../nav/nav.jsx'

const STORAGE_KEY = "todo-app-tasks";
export default function Home({ status, SetStatus }) {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    const deleteTodo = (id) => {
        const updatedtodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedtodos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedtodos))
        console.log("deleted")
    };

    const [search, setSearch] = useState('')
    {
        // console.log(filtered)
    }

    const filtered = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
    )

    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: input,
            Completed: false
        }
        const all = [...todos, newTodo];
        setTodos(all);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        setInput("")
    };

    const handleChange = (tab) => {
        SetStatus(tab);
    }

    const handleAddKeyDown = (e) => {
        if (e.key === "Enter") addTodo();
    };

    const handleToggle = (id) => {
        const updatedtodos = todos.map((todo) =>
            todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
        );
        setTodos(updatedtodos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedtodos));
    }

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    }

    const saveEdit = (id) => {
        const updatedtodos = todos.map((todo) =>
            todo.id === id ? { ...todo, text: editText } : todo
        );
        setTodos(updatedtodos);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedtodos));
        setEditingId(null);
        setEditText("");
    }

    const cancelEdit = () => {
        setEditingId(null);
        setEditText("");
    }

    return (
        <div>
            <div className='discription'>
                <h1>Todo List</h1>
                <p>Stay organized and get things done!</p>
            </div>
            <div className='Add'>
                <input type='text' placeholder='Add a new task...' value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleAddKeyDown}></input>
                <button onClick={addTodo} >+ Add</button>
            </div>
            <div className='home'>
                <div className='homebtns'>
                    <button className={status === 'All' ? 'homeactive' : "default"} onClick={() => handleChange('All')} >All</button>
                    <button className={status === 'Active' ? 'homeactive' : "default"} onClick={() => handleChange('Active')}>Active</button>
                    <button className={status === 'Completed' ? 'homeactive' : "default"} onClick={() => handleChange('Completed')}>Completed</button>
                </div>
                <div className='Search'>
                    <input placeholder=' ⌕  Search Tasks' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                </div>
            </div>

            {status === "Active" && <Tasks filtered={filtered.filter(todo => !todo.Completed)} deleteTodo={deleteTodo} handleToggle={handleToggle} editingId={editingId} editText={editText} setEditText={setEditText} startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} />}

            {status === "Completed" && <Completed filtered={filtered.filter(todo => todo.Completed)} deleteTodo={deleteTodo} handleToggle={handleToggle} editingId={editingId} editText={editText} setEditText={setEditText} startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} />}

            {status === "All" && <> <Tasks filtered={filtered.filter(todo => !todo.Completed)} deleteTodo={deleteTodo} handleToggle={handleToggle} editingId={editingId} editText={editText} setEditText={setEditText} startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} /> <Completed filtered={filtered.filter(todo => todo.Completed)} deleteTodo={deleteTodo} handleToggle={handleToggle} editingId={editingId} editText={editText} setEditText={setEditText} startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} /></>}


        </div>
    )
}