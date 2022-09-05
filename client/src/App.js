import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const mockFetch = async () => {
  const res = await fetch("/getFilenames")
  const jsonres = await res.json()
  return jsonres
}

function App() {
  const [entries, setEntries] = useState([])
  const [file, setFile] = useState()
  const { ref, inView, entry } = useInView({
    treshold: 0,
  })

  useEffect(() => {
    mockFetch().then(reslist => {
      setEntries((entries) => [...entries, ...reslist])
    })
  }, [inView])

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('image', file)

    fetch("/uploadFile", {
      method: 'POST',
      body: form
    }).then(res => {
      console.log(res)
    })
  }
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setFile(e.target.files[0])} type="file"></input>
        <button type="submit">Submit</button>
      </form>
      <div>{entries.map((el, index) => {
        if (index === entries.length - 1) {
          return <img ref={ref} style={{ width: "100%", margin: "1rem" }} src={`/static/${el}`} />
        }
        return <img style={{ width: "100%", margin: "1rem" }} src={`/static/${el}`} />
      })}</div>
    </>
  );
}

export default App;
