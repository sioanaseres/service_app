import React from 'react'
import {tractare} from "../assets"
import styles , {layout} from '../style'

const Service = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} md:max-w-[570px] mt-5 leading-10 text-[20px] `}>Principalul nostru obiectiv este să îți oferim soluții practice și rapide care te scutesc de timp pierdut și efort pentru întocmirea dosarului de daună.
        Avem standarde înalte de calitate și respectăm termenele de reparație estimate.</p>
      </div>
      <div className={layout.sectionImg}>
        <img src={tractare} alt="service" className='w-[100%] h-auto relative z-[5] rounded-[10px]'  />
      </div>
    </section>
  )
}

export default Service
