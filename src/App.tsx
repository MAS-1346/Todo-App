import Nav from './components/nav/nav.jsx'
import Home from './components/home/home.jsx'
import { useState } from 'react'

export default function App() {
  const [status, SetStatus] = useState("All")
  return (
    <div style={{ display: 'flex' }}>
      <Nav status={status} SetStatus={SetStatus} />
      <div>
        <Home status={status} SetStatus={SetStatus}/>
      </div>
    </div>
  )
}
