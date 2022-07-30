import React from 'react'

const MsjError = ({mensaje}) => {
  return (
    <div className="text-red-400 text-xs mt-3">
        {mensaje}
    </div>
  )
}

export default MsjError