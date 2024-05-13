import React from 'react'
import styles from '../style'
import {phone} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[180px] h-[70px] bg-red-500 hover:bg-red-900 rounded-[10px] p-[2px] cursor-pointer md:ml-5`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-[10px]`}>
       
          <a href="tel:+40786622000" className={`${styles.flexCenter} `}>
            <img src={phone} alt="telefon" className='w-[28px] h-[28px] object-contain mr-2'  />
            <span  className='font-poppins font-medium text-[16px] leading-[23px] text-gradient font-semibold'> 0786 622 000</span>
          </a>
       
     
      </div>
    </div>
  )
}

export default GetStarted
