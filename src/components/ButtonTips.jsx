import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'

export const ButtonTips = () => {
  const {
    tipPorcentage,
    setTipPorcentage,
    customTip,
    setCustomTip } = useContext(MainContext)

  const handleCustomTipChange = (e) => {
    let value = (e.target.value)
    if (/^\d*\.?\d{0,1}$/.test(value)) {
      setCustomTip(value)
      setTipPorcentage(0)
    }
  }

  return (
    <div className='grid grid-cols-2 gap-2 place-items-center'>
      {[5, 10, 15, 20, 25].map((value) => {
        return (
          <label key={value} className=''>
            <input
              type="radio"
              name='tip'
              value={value}
              checked={tipPorcentage === value}
              onChange={() => setTipPorcentage(value)}
              className='hidden' />
            <span
              className={`w-40 h-10 flex items-center justify-center text-white text-xl rounded-lg cursor-pointer transition-all duration-200
                ${tipPorcentage === value ? 'bg-Strongcyan text-Verydarkcyan' : 'bg-Verydarkcyan text-white hover:bg-Strongcyan hover:text-Verydarkcyan'}`}
            >
              {value}%
            </span>
          </label>
          // <button
          //   key={value}
          //   type='button'
          //   className={`w-40 h-10 text-white text-xl rounded-lg cursor-pointer transition-all duration-200
          //     ${tipPorcentage === value
          //       ? 'bg-Strongcyan text-Verydarkcyan'
          //       : 'bg-Verydarkcyan text-white hover:bg-Strongcyan hover:text-Verydarkcyan'}`}
          //   onClick={() => {
          //     setTipPorcentage(value)
          //     setCustomTip('') }}
          // >
          //   {value}%
          // </button>
        )
      })}
      <input
        type="text"
        id='custom-tip'
        placeholder='Custom %'
        className='w-40 h-10 cursor-pointer outline-none text-center bg-Verylightgrayishcyan text-Darkgrayishcyan font-bold text-xl rounded-lg 
          focus:ring-2 focus:ring-Strongcyan'
        value={customTip}
        onChange={handleCustomTipChange} />
    </div>
  )
}
