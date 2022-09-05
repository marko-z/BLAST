import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

const mockFetch = async () => {
  const res = await fetch("/static/__credits.json")
  const jsonres = await res.json()
  return jsonres
}

function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    mockFetch().then(res => console.log(res))
  },[])
  return (
    <div> Frontend</div>
  );
}

export default App;
