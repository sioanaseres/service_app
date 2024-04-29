import styles from './style'
import { Contact, Business, Service, Partners, Info, Footer, Navbar, Stats, Cards, Hero, Benefits, Documents } from "./components";


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>
  
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
        
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Benefits></Benefits>
          <Business></Business>
          <Cards></Cards>
          <Service></Service>
          <Info></Info>
          <Documents></Documents>
          <Partners></Partners>
          <Contact></Contact>
        </div>
      </div>
    </div>
  )
}

export default App
