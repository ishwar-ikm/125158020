import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col'>
        <h1 className='text-center text-4xl mb-10'>Choose a company</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-customText text-3xl">
          <Link to={`/AMZ`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>AMZ</p>
          </Link>

          <Link to={`/FLP`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>FLP</p>
          </Link>

          <Link to={`/SNP`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>SNP</p>
          </Link>

          <Link to={`/MYN`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>MYN</p>
          </Link>

          <Link to={`/AZO`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>AZO</p>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Home
