import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 text-white p-4 text-center">
      <h1 className='text-2xl font-bold'>Welcome to Your Movie Ticket Booking Website!</h1>
    </div>
  );
}

export default App
