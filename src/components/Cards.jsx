import React from 'react'
import styles  from '../style'
import { cards } from '../constants'
import Card from './Card'

const Cards = () => {
  return (
   <section id='cards' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] r-[50%] rounded-full blue__gradient'></div>
    <div className='flex flex-wrap justify-center w-full cards-container relative z-[1]'>
      {cards.map(card =>(
        <Card key = {card.id} {...card}/>
      ))}
    </div>
   </section>
  )
}

export default Cards
