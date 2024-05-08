import React from 'react'
import styles from '../style'
import { partners } from '../constants'

const Partners = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      
      <div className={`${styles.flexCenter}  w-full flex-col`}>
        <h3 className={`${styles.heading3}`}>*PARTENERI <br />
        Colaborăm cu cele mai mari firme de asigurări din România</h3>
        <p className={`${styles.paragraph} mt-3 mb-3`}>În cazul în care ai nevoie de consiliere sau de reparația unei daune auto, te poți baza pe parteneriatul nostru cu cele mai mari societăți de asigurări.</p>
      {/* <div className={`${styles.flexCenter} flex flex-1 flex-wrap`} >
        {partners.map(partner=>(
          <div className={` ${styles.flexCenter} sm:w-[162px] w-[120px] h-[55px]  bg-blue-gradient m-5 rounded-[10px] `} key={partner.id}>
            <img  src={partner.icon} alt='partener' className='sm:w-[142px] w-[100px] object-contain '/>
          </div>
        ))}
        </div> */}
        <p className={`${styles.paragraph}`}>IMPORTANT:<em> Vă informăm că, în conformitate cu prevederile art. 6 alin. (8) din Legea nr. 132/2017, persoana prejudiciată are dreptul de a se adresa pentru efectuarea reparației oricărei unități reparatoare auto, fără nicio restricție sau constrângere din partea asiguratorului RCA sau a unității reparatoare auto, care ar putea să îi influențeze opțiunea (Norma ASF 20/2017 Art 19. pct. K).</em></p>
      </div>
    </section>
  )
}

export default Partners
