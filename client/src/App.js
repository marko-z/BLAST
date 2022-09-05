import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const mockFetch = async () => {
  const res = await fetch("/static/__credits.json")
  const jsonres = await res.json()
  const reslist = Object.entries(jsonres).map(([key, value]) => ({key,...value}))
  return reslist
}

function App() {
  const [entries, setEntries] = useState([])

  const { ref, inView, entry } = useInView({
    treshold: 0,
  })

  useEffect(() => {
    mockFetch().then(reslist => { 
      setEntries((entries) => [...entries, ...reslist]) 
    })
  },[inView])
  
  return (
    <div>{entries.map((el, index) => {
      if (index === entries.length-1) {
        return <img ref={ref} style={{width: "100%", margin: "1rem"}}src={`/static/${el.key}.jpg`} />
      }
      return <img style={{width: "100%", margin: "1rem"}}src={`/static/${el.key}.jpg`} />
    })}</div>
  );
}

export default App;
