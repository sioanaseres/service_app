import React from 'react'
import styles, {layout} from '../style'
import {FeatureCard} from '.'
import {featureCards} from '../constants'

const Info = () => {
  return (
    <section id='info' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className=' flex flex-col'>
        <h2 className={`${styles.heading2}`}>*INFO UTILE </h2>
        <p className={`${styles.paragraph} md:max-w-[270px] max-w-[470px] mt-5`}>Cele mai importante informații pe care trebuie să le știi în caz de accident</p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
       {featureCards.map((feature, index) =>(
        <FeatureCard key={feature.id} {...feature} index ={index}/>
       ))}
      </div>
    </section>
  )
}

export default Info
