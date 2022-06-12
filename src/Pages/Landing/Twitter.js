import React from 'react'

export default function Twitter({navigation}) {
  return (
      <div className='top_component invert'>
          
          <div className='top_component_text '>
              <div className='top_com_txt_big'>
                  Gather a bigger <br/>committee on the bird app (twitter)
              </div>
              <div className='top_com_txt_small'>
                 Get paid for following, comment and likes on twitter
              </div>
              <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Get started</button>
              
          </div>

          <div className='top_component_img'>
            <img src='/face.png' alt='' className='top_component_img-com'/>
          </div>
          
      </div>
      
  )
}
