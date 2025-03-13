import { useContext } from "react"
import iconDollar from '../../images/icon-dollar.svg'
import iconPerson from '../../images/icon-person.svg'
import { ButtonTips } from "./ButtonTips"
import { MainContext } from "../Context/MainContext"
import { handleBlur } from "../utils"
import { handleFocus } from "../utils"

export const BillTotal = () => {
  const { total, setTotal, persons, setPersons } = useContext(MainContext)

  // totalPerPerson()
  //Estoy en enviar la funcion o las funciones al contexto parap oder compartirlas con lor
  // demas componentes y asiu poder darle funcionalidad a todo,
  //hay que verificar si es el  mejor paso o hay maneras de usar usecallback

  return (
    <div className="w-80 h-96 flex justify-center mb-4">
      <form className="flex flex-col w-auto">
        <label htmlFor="total" className="mt-2 mb-2 text-Darkgrayishcyan">Bill</label>
        <div className="relative">
          <img
            src={iconDollar}
            alt="icon-dollar"
            className="absolute top-3 left-3" />
          <input
            type="number"
            id="total"
            placeholder="0"
            onFocus={(e) => handleFocus(e, setTotal)}
            onBlur={(e) => handleBlur(e, setTotal)}
            value={total}
            onChange={(e) => setTotal(parseFloat(e.target.value))}
            className="w-80 h-10 outline-none rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold
            focus:ring-2 focus:ring-Strongcyan cursor-pointer" />
        </div>
        <label htmlFor="tip" className="mt-8 mb-3 text-Darkgrayishcyan">Select Tip %</label>
        <section>
          <ButtonTips />
        </section>
        <label htmlFor="numberOfPeople" className="mt-8 mb-3 text-Darkgrayishcyan lg:mt-4">Number of People</label>
        <div className="relative">
          <img
            src={iconPerson}
            alt="icon-person"
            className="absolute top-3 left-3" />
          <input
            type="number"
            id="numberOfPeople"
            placeholder="0"
            onFocus={(e) => handleFocus(e, setPersons)}
            onBlur={(e) => handleBlur(e, setPersons)}
            value={persons}
            onChange={(e) => {
              const value = e.target.value
              if (/^\d*$/.test(value))
                setPersons(value)
            }}
            className="w-80 h-10 outline-none rounded-lg text-end pr-4 bg-Verylightgrayishcyan text-Verydarkcyan text-xl font-bold
            focus:ring-2 focus:ring-Strongcyan cursor-pointer" />
        </div>
      </form>
    </div>
  )
}
