import React, { useCallback, useMemo, useState } from 'react'
import { MainContext } from './MainContext'

export const MainProvider = ({ children }) => {
  const [total, setTotal] = useState(0) // Total of the bill 
  const [persons, setPersons] = useState(0) // Total of persons
  const [tipPorcentage, setTipPorcentage] = useState(0) //Tip porcentage
  const [customTip, setCustomTip] = useState('') //estado del input custom tip

  //Uso de callback para memorizar la funcion
  const totalWithTip = useCallback(() => {
    const bill = total
    if (isNaN(bill) || bill <= 0) return { tip: 0, finalTotal: 0 };

    const customTipValue = parseFloat(customTip)
    const tipPercentageToUse = !isNaN(customTipValue) && customTipValue > 0 ? customTipValue : tipPorcentage

    const tip = bill * tipPercentageToUse / 100
    const finalTotal = bill + tip

    console.log(`${finalTotal}`)
    return { tip, finalTotal }
  }, [total, tipPorcentage, customTip])

  //Memoriza la propina por persona para evitar re-calculos innecesarios
  const tipPerPerson = useMemo(() => {
    const { tip } = totalWithTip()
    return persons > 0 ? tip / persons : 0
  }, [totalWithTip, persons])

  //Memoriza el total por persona
  const totalPerPerson = useMemo(() => {
    const { finalTotal } = totalWithTip()
    const pricePerPerson = finalTotal / persons
    return persons > 0 ? pricePerPerson : finalTotal
  }, [totalWithTip, persons])

  return (
    <MainContext.Provider value={{
      total,
      setTotal,
      persons,
      setPersons,
      totalPerPerson,
      tipPorcentage,
      setTipPorcentage,
      tipPerPerson,
      customTip,
      setCustomTip
    }}>
      {children}
    </MainContext.Provider>
  )
}
