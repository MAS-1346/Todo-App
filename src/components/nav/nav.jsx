// import React from 'react'
import '/src/App.css'
// import { useState } from 'react'
// import Completed from '../completed/completed.jsx'
// import Tasks from '../tasks/tasks.jsx'
// import App from '/src/App.jsx'
export default function Nav({ status, SetStatus }) {
    return (
        <>
            <div className='nav'>
                <div className='title'>
                    <div className='logo'>✓</div>
                    <div>TodoList</div>
                </div>
                <div className='items' >
                    <div className={status === 'All' ? 'active' : "nonactive"} onClick={() => SetStatus('All')} >
                        ⌂ {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"}All Tasks
                    </div>
                    <div className={status === 'Active' ? 'active' : "nonactive"} onClick={() => SetStatus('Active')}>
                        ◷ {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} Active
                    </div>
                    <div className={status === 'Completed' ? 'active' : "nonactive"} onClick={() => SetStatus('Completed')}>
                        ✓ {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} {"\u00a0"} completed
                    </div>
                </div>
            </div>
        </>
    )
}
