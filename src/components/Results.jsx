import { useState } from "react"

export const Results = () => {
  const [tipAmount, setTipAmount] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  return (
    <div className="w-80 h-[400px] m-4 pt-8 p-6 rounded-lg bg-Verydarkcyan flex flex-col gap-4 ">
      <section className="flex justify-between items-center border  border-yellow-300">
        <div className="flex flex-col">
          <p className="text-Verylightgrayishcyan">Tip Amount</p>
          <p className="text-Darkgrayishcyan">/ person</p>
        </div>
        <p className="text-xl text-Strongcyan">tipAmoun</p>
      </section>
      <section className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-Verylightgrayishcyan">Total</p>
          <p className="text-Darkgrayishcyan">/ person</p>
        </div>
        <p className="text-xl text-Strongcyan">total</p>
      </section>
      <button className="w-[272px] h-10 text-xl bg-Strongcyan text-Verydarkcyan cursor-pointer rounded-md
        hover:bg-Lightgrayishcyan">RESET</button>
    </div>
  )
}
