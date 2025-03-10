
import logo from '../images/logo.svg'
import './App.css'
import { Container } from './components/Container'
import { BillTotal } from './components/BillTotal'
import { Results } from './components/Results'

function App() {


  return (
    <div className='bg-Lightgrayishcyan w-screen h-full flex flex-col justify-end items-center
    lg:h-screen lg:justify-center'>
      <div className='mt-6 mb-6'>
        <img src={logo} alt="logo" className='' />
      </div>
      <Container>
        <BillTotal />
        <Results />
      </Container>
    </div>
  )
}

export default App
