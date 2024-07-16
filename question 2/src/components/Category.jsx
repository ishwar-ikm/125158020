import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = () => {

  const {company} = useParams();

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col'>
        <h1 className='text-center text-4xl mb-10'>Choose a category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-customText text-3xl">
          <Link to={`/${company}/phone`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Phone</p>
          </Link>

          <Link to={`/${company}/Computer`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Computer</p>
          </Link>

          <Link to={`/${company}/TV`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>TV</p>
          </Link>

          <Link to={`/${company}/Earphone`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Earphone</p>
          </Link>

          <Link to={`/${company}/Tablet`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Tablet</p>
          </Link>

          <Link to={`/${company}/Charger`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Charger</p>
          </Link>

          <Link to={`/${company}/Mouse`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Mouse</p>
          </Link>

          <Link to={`/${company}/Keypad`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Keypad</p>
          </Link>

          <Link to={`/${company}/Pendrive`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Pendrive</p>
          </Link>

          <Link to={`/${company}/Remote`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Remote</p>
          </Link>

          <Link to={`/${company}/Speaker`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Speaker</p>
          </Link>

          <Link to={`/${company}/Headset`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Headset</p>
          </Link>

          <Link to={`/${company}/Laptop`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>Laptop</p>
          </Link>

          <Link to={`/${company}/PC`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200 h-[200px] w-[200px] flex items-center justify-center">
            <p>PC</p>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Category
