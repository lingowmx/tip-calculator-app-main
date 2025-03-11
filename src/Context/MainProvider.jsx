import React from 'react'
import { MainContext } from './MainContext'
import { useState } from 'react'

export const MainProvider = ({ children }) => {
  const [total, setTotal] = useState(0) // Total of the bill 
  const [tipAmount, setTipAmount] = useState(0) //Tip total amount
  const [totalPerPerson, setTotalPerPerson] = useState(0) // total per persons
  const [persons, setPersons] = useState('')
  const [tipPorcentage, setTipPorcentage] = useState(0) //Tip porcentage
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
    }}>
      {children}
    </MainContext.Provider>
  )
}
