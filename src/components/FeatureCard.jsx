import React from 'react'
import {featureCards} from '../constants'
import styles  from '../style'

const FeatureCard = ({id, icon, title, content, index}) => {
  return (
    <div className={`flex flex-row md:p-6 p-0 rounded-[20px] ${index !== featureCards.length -1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`sm:w-[64px] sm:h-[64px] w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
        <img src={icon} alt="icon" className='sm:w-[50%] sm:h-[50%] w-[30%] h-[30%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
          <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1'>{content}</p>
        </div>
     
    </div>
  )
}

export default FeatureCard
