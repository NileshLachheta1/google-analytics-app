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
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page"
    });
  }, [])

  const handleClick = () => {
    // ReactGA.send({
    //   hitType: "event",
    //   eventCategory: "Button",
    //   eventAction: "Click",
    //   title: "Botton Click Counter Event",
    //   eventLabel: "Click Button",
    //   eventValue: 10
    // });

    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Click Button",
      value: 10
    });
    console.log("increse counter");
    setCount((count) => count + 1);
  }

  const handleLikeClick = () => {
    ReactGA.event({
      category: "Like Button",
      action: "Click",
      label: "Click TO Like",
      value: 20
    });
    console.log("liked");
  }

  const handleSubScribeClick = () => {
    ReactGA.event({
      category: "SubScribe Button",
      action: "Click",
      label: "Click TO SubScribe",
      value: 30
    });
    console.log("subscribed")
  }

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
        <button onClick={() => handleClick()}>
          count is {count}
        </button>
        <br /><br />
        <div>
          <button onClick={() => handleLikeClick()}>
            Like
          </button>
        </div>
        <br />
        <div>
          <button onClick={() => handleSubScribeClick()}>
            Subscribe
          </button>
        </div>
        <p>This is a Vite + React app with a counter button. for google analytics implementation</p>
        <p>Add Click Event to track the click activity</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
