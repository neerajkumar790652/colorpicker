import React from 'react'

const Color = ({color_code,color_name}) => {
  return (
    <div className='result' style={{height:250,width:200}}>
        <p style={{height:180,width:200,backgroundColor:`${color_code}`}}></p>
        <p className='text'>{color_code}</p>
        <span className='text' style={{color:`${color_code}`,fontSize:20}}>{color_name}</span>
    </div>
  )
}

export default Color;
