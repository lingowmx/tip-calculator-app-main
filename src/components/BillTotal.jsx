import { useState } from "react"
import iconDollar from '../../images/icon-dollar.svg'
import iconPerson from '../../images/icon-person.svg'

export const BillTotal = () => {
  const [total, setTotal] = useState(2222)
  const [persons, setPersons] = useState(3333)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
  }

  return (
    <div className="w-96 m-4 flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        <label htmlFor="total" className="mt-2 mb-2 text-Darkgrayishcyan">Bill</label>
        <div className="relative">
          <img
            src={iconDollar}
            alt="icon-dollar"
            className="absolute top-3 left-3" />
          <input
            type="number"
            id="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-80 h-10 rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold" />
        </div>
        <label htmlFor="tip" className="mt-8 mb-3 text-Darkgrayishcyan">Select Tip %</label>
        <section className="grid grid-cols-2 gap-2 place-items-center">
          <button 
            className="w-40 h-10 bg-Verydarkcyan text-white text-xl rounded-lg cursor-pointer
             hover:bg-Strongcyan hover:text-Verydarkcyan">5%</button>
          <button 
            className="w-40 h-10 bg-Verydarkcyan text-white text-xl rounded-lg cursor-pointer
             hover:bg-Strongcyan hover:text-Verydarkcyan">10%</button>
          <button 
            className="w-40 h-10 bg-Verydarkcyan text-white text-xl rounded-lg cursor-pointer
             hover:bg-Strongcyan hover:text-Verydarkcyan">15%</button>
          <button 
            className="w-40 h-10 bg-Verydarkcyan text-white text-xl rounded-lg cursor-pointer
             hover:bg-Strongcyan hover:text-Verydarkcyan">25%</button>
          <button 
            className="w-40 h-10 bg-Verydarkcyan text-white text-xl rounded-lg cursor-pointer
             hover:bg-Strongcyan hover:text-Verydarkcyan">50%</button>
          <button 
            className="w-40 h-10 bg-Verylightgrayishcyan text-Darkgrayishcyan font-bold text-xl rounded-lg">Custom</button>
        </section>
        <label htmlFor="numberOfPeople" className="mt-8 mb-3 text-Darkgrayishcyan">Number of People</label>
        <div className="relative">
          <img
            src={iconPerson}
            alt="icon-person"
            className="absolute top-3 left-3" />
          <input
            type="text"
            id="numberOfPeople"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className="w-80 h-10 rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold" />
        </div>
      </form>
    </div>
  )
}
