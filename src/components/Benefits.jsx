import React from 'react'
import styles from '../style'

const Benefits = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
       <div className=' flex flex-col'>
          <h3 className={`${styles.heading3}  leading-[42px]`} >*BENEFICII <br/>
        Suntem alături de tine la fiecare pas</h3>
       
       </div>
     </section>
  )
}

export default Benefits
