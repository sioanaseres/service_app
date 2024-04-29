import React from 'react'
import styles from '../style' 
import {centru_daune} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
   <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 text-white'>
      La sediile noastre vă putem ajuta cu:
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins  text-white mt-2'>
        <ol className='ss:text-[32px] text-[26px] font-semibold '>
          <li className='text-gradient'>Reparație</li>
          <li>Mașină la Schimb</li>
          <li className='text-gradient'>Asistență completare corectă Amiabil Online și Tiparit</li>
          <li>Asigurăm condiții pentru constatare daune în maxim 3 zile**</li>
        </ol>
        </h1>
        {/* <div className='ss:flex md:mr-4 mr-0'>
          <GetStarted></GetStarted>
        </div> */}
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Centrul de Consilierre multi RCA & CASCO </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={centru_daune} alt="centru daune" className='md:w-[100%] w-[80%] h-[auto] relative z-[5] md:ml-6 rounded-[10px]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] rigth-20 bottom-20 blue__gradient'></div>

  
    </div>

    <div className={`ww:hiddeb=n ${styles.flexCenter}`}></div>

    
   </section>
  )
}

export default Hero
