import { useContext } from "react"
import { MainContext } from "../Context/MainContext"

export const Results = () => {
const {
  tipPerPerson,
  totalPerPerson,
  setTotal,
  setPersons,
  setTipPorcentage,
  setCustomTip} = useContext(MainContext)


  return (
    <div className="w-80 h-52 pt-8 p-6 rounded-lg bg-Verydarkcyan flex flex-col gap-4
    lg:h-[352px] lg:mt-4 ">
      <section className="flex justify-between items-center">
        <div className="flex flex-col lg:mt-4 lg:mb-4">
          <p className="text-Verylightgrayishcyan">Tip Amount</p>
          <p className="text-Darkgrayishcyan">/ person</p>
        </div>
        <p className="text-xl text-Strongcyan">$ {tipPerPerson.toFixed(2)}</p>
      </section>
      <section className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-Verylightgrayishcyan">Total</p>
          <p className="text-Darkgrayishcyan">/ person</p>
        </div>
        <p className="text-xl text-Strongcyan">$ {totalPerPerson.toFixed(2)}</p>
      </section>
      <button 
        className="w-[272px] h-10 text-xl bg-Strongcyan text-Verydarkcyan cursor-pointer rounded-md
        hover:bg-Lightgrayishcyan lg:mt-28"
        onClick={() => (setTotal('0'), setPersons('0'), setTipPorcentage(0), setCustomTip(''))}>RESET</button>
    </div>
  )
}
