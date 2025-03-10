import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='bg-white h-5/6 w-96 rounded-t-2xl flex flex-col justify-between items-center
    lg:flex-row lg:justify-around lg:h-96 lg:w-[700px] lg:items-start'>
      {children}
    </div>
  )
}
