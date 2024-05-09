import React from 'react'

const Card = ({id, icon, title, content}) => {
  return (
    <div className='flex justify-start flex-col md:px-10 md:py-5 py-0 px-2 rounded-[20px] max-w-[500px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={icon} alt={title} className='w-[52px] object-contain'/>
      <h4 className='font-poppins font-bold text-[20px] leading-[32px] text-white my-5'> {title}</h4>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-dimWhite my-5'> {content}</p>
    </div>
  )
}

export default Card
