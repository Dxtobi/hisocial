import React from 'react'

export default function Whatssup({navigation}) {
  return (
      <div className='top_component'>
          
          <div className='top_component_text'>
              <div className='top_com_txt_big'>
                  Increase your whatssup status view and contact for business
                  Promotion
              </div>
              <div className='top_com_txt_small'>
                 You can also follow us on our whatssap Tv
              </div>
              <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Jump in</button>
          </div>

          <div className='top_component_img'>
            <img src='/whatssup.png' alt='' className='top_component_img-com'/>
          </div>
          
      </div>
      
  )
}
