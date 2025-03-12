import React, { useCallback, useMemo, useState } from 'react'
import { MainContext } from './MainContext'


export const MainProvider = ({ children }) => {
  const [total, setTotal] = useState(0) // Total of the bill 
  // const [tipAmount, setTipAmount] = useState(0) //Tip total amount
  // const [totalPerPerson, setTotalPerPerson] = useState(0) // total per persons
  const [persons, setPersons] = useState(0)
  const [tipPorcentage, setTipPorcentage] = useState(0) //Tip porcentage

  //Uso de callback para memorizar la funcion
  const totalWithTip = useCallback(() => {
    const bill = total
    if(isNaN(bill) || bill <= 0) return { tip: 0, finalTotal: 0 };
    const tip = bill * tipPorcentage / 100
    const finalTotal = bill + tip
    console.log(`${finalTotal}`)
    return {tip, finalTotal}
  },[total, tipPorcentage])

  //Memoriza la propina por persona para evitar re-calculos innecesarios
  const tipPerPerson = useMemo(() => {
    const {tip} = totalWithTip()
    return persons > 0 ? tip / persons : 0
  },[totalWithTip, persons])

  //Memoriza el total por persona
  const totalPerPerson = useMemo(() => {
    const {finalTotal} = totalWithTip()
    const pricePerPerson = finalTotal / persons
    return persons > 0 ? pricePerPerson : finalTotal
  },[totalWithTip, persons])

  //Como el valor de $tip por personas varia con respecto a el total, persons y tipPorcentage
  // usar un useEffect es mejor

  // useEffect(() => {
  //   setTipAmount(tipPerPerson())
  // },[total, tipPorcentage, persons])

  // useEffect(() => {
  //   setTotalPerPerson(totalPerPersonFunction())
  // },[total, persons, tipAmount])

  return (
    <MainContext.Provider value={{
      total,
      setTotal,
      persons,
      setPersons,
      totalPerPerson,
      tipPorcentage,
      setTipPorcentage,
      tipPerPerson
    }}>
      {children}
    </MainContext.Provider>
  )
}
