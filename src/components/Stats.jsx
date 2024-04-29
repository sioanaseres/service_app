import styles from "../style"
import { stats } from "../constants"
import GetStarted from "./GetStarted"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

      {stats.map(stat=>(
        <div key={stat.id} className={`flex justify-center items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[43px] leading-[33px] text-white ml-3 text-center">{stat.title}</h4>
        </div>
      ))}

      <GetStarted></GetStarted>
    </section>
  )
}

export default Stats
