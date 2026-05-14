import Countries from './Components/Countries/countries'
import './App.css'
import { Suspense } from 'react'

const CountriesPromise=fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json())

function App() {

  return (
    <>
      <h1>React on the Go</h1>
      <Suspense fallback={<p>Nadir vai loading...</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
