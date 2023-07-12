'use client'

import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

const JoinedCard = ({ imgUrl, top, left, title }) => {
  return (
    <>
      <div
        className={`absolute top-52 left-[20%] hidden rounded-[32px] bg-[#5d6680] p-[6px] overflow-hidden w-[211px] h-[159px] lg:block`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.3, 1)}
          className="absolute w-full h-[25px] top-20 left-6 flex flex-row flex-nowrap -space-x-3 z-10 overflow-visible"
        >
          <img
            src="/people-02.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <img
            src="/people-01.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <img
            src="/people-03.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <p className="absolute font-normal text-[12px] text-white z-10 left-16 top-1">
            +264 joined
          </p>
        </motion.div>

        <img
          src="/planet-09.png"
          alt="planet"
          className="w-full h-full object-cover rounded-[24px] "
        />
        <p className="absolute font-normal text-[16px] leading-[20px] text-white -mt-[30px] ml-5 z-10">
          The Upside Down
        </p>
      </div>
      <div
        className={`absolute top-52 left-[20%] w-[217px] h-[167px] rounded-[24px] blur-[100px] bg-gradient-to-r from-purple-500 to-pink-500 hidden lg:block`}
      />

      <div
        className={`absolute top-20 left-[60%] hidden rounded-[32px] bg-[#5d6680] p-[6px] overflow-hidden w-[211px] h-[159px] lg:block`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.3, 1)}
          className="absolute w-full h-[25px] top-20 left-6 flex flex-row flex-nowrap -space-x-3 z-10 overflow-visible"
        >
          <img
            src="/people-02.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <img
            src="/people-01.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <img
            src="/people-03.png"
            alt="people"
            className="w-[25px] h-ful object-cover"
          />
          <p className="absolute font-normal text-[12px] text-white z-10 left-16 top-1">
            +264 joined
          </p>
        </motion.div>

        <img
          src="/planet-08.png"
          alt="planet"
          className="w-full h-full object-cover rounded-[24px] "
        />
        <p className="absolute font-normal text-[16px] leading-[20px] text-white -mt-[30px] ml-5 z-10">
          Hawkins Labs
        </p>
      </div>
      <div
        className={`absolute top-20 left-[60%] w-[217px] h-[167px] rounded-[24px] blur-[100px] bg-gradient-to-r from-purple-500 to-blue-500 hidden lg:block`}
      />
    </>
  )
}

export default JoinedCard
