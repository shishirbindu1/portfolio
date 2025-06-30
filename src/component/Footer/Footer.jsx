import React from 'react'
import { FaGithub,FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer sm:grid grid-flow-col px-3 gap md:px-10 h-36">
      <div className="one text-center text-xl pb-3 place-self-center">
        <span className='text-gray-400'>© 2023 
          <a href="https://shishirbindu.com.np"> Shishir Bindu </a>
           .All Right Reserved
        </span>
      </div>
      <div className="two grid place-items-center">
        <div className='icon grid grid-flow-col text-3xl gap-x-5 justify-items-center w-full sm:w-2/3 lg:w-1/2'><FaGithub/> <FaLinkedin/> <FaFacebook/> <FaInstagram/></div>
      </div>
    </div>
  )
}

export default Footer