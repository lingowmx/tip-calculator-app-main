import { useContext } from "react"
import iconDollar from '../../images/icon-dollar.svg'
import iconPerson from '../../images/icon-person.svg'
import { ButtonTips } from "./ButtonTips"
import { MainContext } from "../Context/MainContext"

export const BillTotal = () => {  
const {total, setTotal, persons, setPersons} = useContext(MainContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit')
    totalWithTip()
  }
  
  
  

  // totalPerPerson()
  //Estoy en enviar la funcion o las funciones al contexto parap oder compartirlas con lor
  // demas componentes y asiu poder darle funcionalidad a todo,
  //hay que verificar si es el  mejor paso o hay maneras de usar usecallback


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
            onChange={(e) => setPersons(e.target.value ? parseInt(e.target.value, 10) : "")}
            className="w-80 h-10 rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold" />
        </div>
      </form>
    </div>
  )
}
