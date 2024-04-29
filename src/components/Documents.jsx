import React, { startTransition } from 'react'
import styles, {layout} from '../style'
import { service_auto } from '../assets'

const Documents = () => {
  return (
<section id = "product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={service_auto} alt="accident" className='w-[100%] h-auto relative z-[5] rounded-[10px]'  />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </div>
      <div className={layout.sectionInfo}>
        <h3 className={`${styles.heading3} mb-3`}>*DOCUMENTE <br />
        Ce acte să pregătești pentru deschiderea dosarului de daună?</h3>
        <ol className='text-dimWhite text-[16px] list-disc font-poppins leading-[30px] ml-4'>
            <li><em className='text-gradient'>Document</em> constatator al producerii evenimentului (proces verbal la Poliție, constatare amiabilă, anexa 2)</li>
            <li><em className='text-gradient'>Autorizație de reparație</em>, dacă este cazul (în original)</li>
            <li>Copie <em className='text-gradient'>poliță de asigurare</em> RCA/ CASCO</li>
            <li><em className='text-gradient'>Certificatul de înmatriculare </em>al vehiculului (în original și copie)</li>
            <li><em className='text-gradient'>Act de identitate</em> (în original și copie)</li>
            <li><em className='text-gradient'>Permisul de conducere</em> (în original și copie)</li>
            <li><em className='text-gradient'>Delegație</em>, dacă vehiculul aparține unei persoane juridice (firma sau societate de leasing).</li>
            <li><em className='text-gradient'>Procură notarială</em>, în cazul în care proprietarul este o altă persoană</li>
        </ol>
    
      </div>
    </section>
  )
}

export default Documents
