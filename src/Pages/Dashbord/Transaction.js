import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'



export default function Transaction() {
  return (
      <div>
          <div className='trans-comp_ invert'>
            <div className='trans-comp_first'>
                <AiOutlineArrowDown size={30} />
                <div className='trans-type'>Reword</div>
            </div>
            <div className='trans-amount'>₦10</div>
          </div>
          <div className='trans-comp_ green'>
            <div className='trans-comp_first'>
                <AiOutlineArrowUp size={30} />
                <div className='trans-type'>Withdraw</div>
            </div>
            <div className='trans-amount'>₦5000</div>
          </div>
          
      </div>
      
  )
}
