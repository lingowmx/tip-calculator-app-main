import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'

export const ButtonTips = () => {
const {tipPorcentage, setTipPorcentage} = useContext(MainContext)



  return (
    <div className='grid grid-cols-2 gap-2 place-items-center'>
      {[5, 10, 15, 20, 25].map((value) => {
        return (
          <button
            key={value}
            type='button'
            className={`w-40 h-10 text-white text-xl rounded-lg cursor-pointer transition-all duration-200
              ${tipPorcentage === value
                ? 'bg-Strongcyan text-Verydarkcyan'
                : 'bg-Verydarkcyan text-white hover:bg-Strongcyan hover:text-Verydarkcyan'}`}
            onClick={() => { setTipPorcentage(value) }}
          >
            {value}%
          </button>
        )
      })}
      <button
        className='w-40 h-10 bg-Verylightgrayishcyan text-Darkgrayishcyan font-bold text-xl rounded-lg'>
        Custom
      </button>
    </div>
  )
}
