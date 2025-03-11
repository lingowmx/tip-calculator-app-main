import React, { useEffect } from 'react'
import { MainContext } from './MainContext'
import { useState } from 'react'

export const MainProvider = ({ children }) => {
  const [total, setTotal] = useState('') // Total of the bill 
  const [tipAmount, setTipAmount] = useState(0) //Tip total amount
  const [totalPerPerson, setTotalPerPerson] = useState(0) // total per persons
  const [persons, setPersons] = useState('')
  const [tipPorcentage, setTipPorcentage] = useState(0) //Tip porcentage

  
  const totalWithTip = () => {
    const bill = parseFloat(total)
    if(isNaN(bill) || bill <= 0) return "Insert a valid number"
    const tip = bill * tipPorcentage / 100
    const finalTotal = bill + tip
    console.log(`${finalTotal}`)
    return {tip, finalTotal}
  }
  const tipPerPerson = () => {
    const {tip} = totalWithTip()
    return persons > 0 ? tip / persons : 0
  }
  const totalPerPersonFunction = () => {
    const {finalTotal} = totalWithTip()
    const pricePerPerson = finalTotal / persons
    return persons > 0 ? pricePerPerson : finalTotal
  }
  //Como el valor de $tip por personas varia con respecto a el total, persons y tipPorcentage
  // usar un useEffect es mejor

  useEffect(() => {
    setTipAmount(tipPerPerson())
  },[total, tipPorcentage, persons])

  useEffect(() => {
    setTotalPerPerson(totalPerPersonFunction())
  },[total, persons, tipAmount])

  return (
    <MainContext.Provider value={{
      total,
      setTotal,
      tipAmount,
      setTipAmount,
      persons,
      setPersons,
      totalPerPerson,
      setTotalPerPerson,
      tipPorcentage,
      setTipPorcentage,
      totalWithTip,
      totalPerPersonFunction,
      tipPerPerson
    }}>
      {children}
    </MainContext.Provider>
  )
}
