import React from 'react'
import { accident } from '../assets'
import styles, {layout} from '../style'

const Business = () => {
  return (
    <section id = "product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={accident} alt="accident" className='w-[100%] h-auto relative z-[5] rounded-[10px]'  />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </div>
      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} md:max-w-[570px] mt-5 lg:ml-10 leading-10 text-[20px] `}>Ai fost implicat într-un accident rutier? Rezolvă-ți dauna rapid, sigur și eficient. Poți beneficia de toate serviciile necesare într-un singur loc! Îți oferim servicii complete de consiliere pentru deschiderea dosarului de daună.</p>
      </div>
    </section>
  )
}

export default Business
