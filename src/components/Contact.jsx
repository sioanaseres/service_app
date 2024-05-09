import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_suymwsy', 'template_ltcn11o', form.current, {
        publicKey: 'bmdPzrO9j4Yi4kih1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className={` ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className=' flex flex-col'>
        <h3 className={`${styles.heading3}`}>*CONTACT <br />
    Rezolvă-ți astăzi dauna rapid, mai simplu și mai eficient!</h3>
      <p className={`${styles.paragraph} mt-3 mb-3`}>Contactează-ne la <a href="tel:+40734444765" className='underline'> 0734444765</a>, 
scrie-ne la <a href="mailto:dauneautoasistenta@gmail.com" className='underline' style={{overflowWrap: 'break-word'}}>dauneautoasistenta@gmail.com</a> sau completeaza formularul de mai jos:</p>
   
      </div>
      <form ref={form} onSubmit={sendEmail} action="" className='font-poppins text-white flex flex-col md:max-w-[600px] max-w-[90%]'>
        <label htmlFor="name" className=' mr-3 mb-3' >Nume și prenume</label>
        <input type="text" id='name' placeholder='Nume și prenume' className={`${styles.input} `} name="user_name"/>

        <label htmlFor="phone" className=' mr-3 mb-3'>Telefon</label>
        <input type="text" id='phone' placeholder='Număr de telefon' className={`${styles.input} `} name="user_phone"/>

        <label htmlFor="details" className=' mr-3 mb-3'>Detalii eveniment rutier</label>
        <textarea id="details" rows="4" className={`${styles.input} `} placeholder='Detalii eveniment rutier' name="message"></textarea>

        <p className={`${styles.paragraph} mt-3 mb-3 text-sm`}>Îmi dau consimțământul pentru prelucrarea datelor cu caracter personal.</p>
        <button className="text-dimWhite border border-red-500 hover:border-red-800 rounded-[10px] cursor-pointer w-[130px] p-3"  >Trimite </button>
      </form>
    </section>
  )
}

export default Contact
