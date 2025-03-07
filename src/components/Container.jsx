import React from 'react'
import { BillTotal } from './BillTotal'
import { Results } from './Results'

export const Container = () => {
  return (
    <div className='bg-white h-5/6 w-96 rounded-t-2xl flex flex-col justify-center items-center'>
      <BillTotal/>
      <Results />
    </div>
  )
}
