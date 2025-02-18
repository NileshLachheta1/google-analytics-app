import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactGA from 'react-ga4'

const TRACKING_ID = 'G-CSSG14Q2KG';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    ReactGA.send({
      hitType : "pageview",
      page : window.location.pathname + window.location.search,
      title : "Home Page"
    });
  },[])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>This is a Vite + React app with a counter button. for google analytics implementation</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
