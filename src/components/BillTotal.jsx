import { useContext } from "react"
import iconDollar from '../../images/icon-dollar.svg'
import iconPerson from '../../images/icon-person.svg'
import { ButtonTips } from "./ButtonTips"
import { MainContext } from "../Context/MainContext"

export const BillTotal = () => {  
const {total, setTotal, persons, setPersons, tipPorcentage} = useContext(MainContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    totalWithTip()
  }
  


  const totalWithTip = () => {
    const bill = parseFloat(total)
    if(isNaN(bill) || bill <= 0) return "Insert a valid number"
    const tip = bill * tipPorcentage / 100
    const finalTotal = bill + tip
    return finalTotal
  }
  
  const totalPerPerson = () => {
    const total = totalWithTip()
    const perPerson = total / persons
    console.log(` el total es: ${perPerson}`)
    return perPerson
  }
  totalPerPerson()


  return (
    <div className="w-80 h-96 flex justify-center mb-4">
      <form onSubmit={handleSubmit} className="flex flex-col w-auto">
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
            onChange={(e) => setTotal(parseFloat(e.target.value))}
            className="w-80 h-10 rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold" />
        </div>
        <label htmlFor="tip" className="mt-8 mb-3 text-Darkgrayishcyan">Select Tip %</label>
        <section>
          <ButtonTips/>
        </section>
        <label htmlFor="numberOfPeople" className="mt-8 mb-3 text-Darkgrayishcyan lg:mt-4">Number of People</label>
        <div className="relative">
          <img
            src={iconPerson}
            alt="icon-person"
            className="absolute top-3 left-3" />
          <input
            type="text"
            id="numberOfPeople"
            value={persons}
            onChange={(e) => setPersons(parseFloat(e.target.value))}
            className="w-80 h-10 rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold" />
        </div>
      </form>
    </div>
  )
}
