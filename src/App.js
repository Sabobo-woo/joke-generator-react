import './App.css';
import { useState, useEffect } from 'react'
import Joke from './joke';




function App() {

  const [data, setData] = useState(null)
  // const [dataLoaded, setDataLoaded] = useState(false)


  const getJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any')
    const responseData = await response.json()



    if (responseData.type === 'single') {
      setData(responseData)
    } else {
      const data_without_delivery = { ...responseData, delivery: null }
      setData(data_without_delivery)
      setTimeout(() => {
        setData(responseData)

      }, 3000)
    }

  }



  useEffect(() => {
    getJoke()
  }, [])

  // console.log(data)




  return (
    <div className="App">
      <button onClick={getJoke}>Generate joke</button>
      {
        data === null
          ? <h1>Loading..</h1>
          : (
            <Joke data={data} />
          )
      }




    </div >
  )
}

export default App;
