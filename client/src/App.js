import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"

const mockFetch = async () => {
  const res = await fetch("/static/__credits.json")
  const jsonres = await res.json()
  const reslist = Object.entries(jsonres).map(([key, value]) => ({key,...value}))
  return reslist
}

function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    mockFetch().then(reslist => { 
      setEntries(reslist) 
    })
  },[])
  return (
    <div>{entries.map(el => {
      return <img style={{width: "100%", margin: "1rem"}}src={`/static/${el.key}.jpg`} />
    })}</div>
  );
}

export default App;
