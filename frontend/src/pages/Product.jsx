import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col py-[40px] gap-[50px]'>

        <div className='w-[100%] flex items-center justify-center flex-col '>
            <LatestCollection/>
        </div>
        <div className='w-[100%] flex items-center justify-center flex-col '>
            <BestSeller/>
        </div>
      
    </div>
  )
}

export default Product
