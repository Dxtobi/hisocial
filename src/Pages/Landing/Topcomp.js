import React from 'react'

export default function Topcomp({navigation}) {
  return (
      <div className='top_component'>
          
          <div className='top_component_text'>
              <div className='top_com_txt_big'>
                  Every like and follow would be made with pleasure
              </div>
              <div className='top_com_txt_small'>
                  Buy or sell with UPMART online<br />
                  promote your self and goods
              </div>
              <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Get started</button>
              
          </div>

          <div className='top_component_img'>
            <img src='/user.png' alt='' className='top_component_img-com'/>
          </div>
          
      </div>
      
  )
}
