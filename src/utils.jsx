export const handleFocus = (e, setter) => {
  if(e.target.value === '0'){
    setter('')
  }
}

export const handleBlur = (e, setter) => {
  if(e.target.value === ''){
   setter('0')
  }
}

