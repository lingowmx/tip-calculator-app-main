
import { Container } from './components/Container'
import logo from '../images/logo.svg'
import './App.css'
import { BillTotal } from './components/BillTotal'

function App() {


  return (
    <div className='bg-Lightgrayishcyan h-screen w-screen flex flex-col justify-end items-end'>
      <img src={logo} alt="logo" className='mx-auto pb-4' />
      <Container />
    </div>
  )
}

export default App
