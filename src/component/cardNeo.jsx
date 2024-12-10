import React from 'react'

const CardNeo = ({w, h,children,className,shadow,onclick}) => {
  return (
    <div onClick={onclick}  className={`rounded-[10px] ${shadow || 'shadow-outside'} bg-tertiary text-black  ${className || ''}`} style={{ width: w || '200px', height: h || '400px' }}>
        {children}
    </div>
  )
}

export default CardNeo
