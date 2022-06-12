import React from 'react'

export default function Instagram({navigation}) {
  return (
      <div className='top_component'>
          
          <div className='top_component_text'>
              <div className='top_com_txt_big'>
                  Get real <br/>followers, comment and likes on your instagram
              </div>
              <div className='top_com_txt_small'>
                 You can also get paid for following, comment and likes on instagram
              </div>
              <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Get started</button>
          </div>

          <div className='top_component_img'>
            <img src='/instagram.png' alt='' className='top_component_img-com'/>
          </div>
          
      </div>
      
  )
}
