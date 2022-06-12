import React from 'react'
import {
    BiTimeFive,
    BiDollar
} from 'react-icons/bi'
import {
    MdAdsClick
} from 'react-icons/md'
//
export default function Why() {

    const data = [
        {
            type: <BiTimeFive size={30}/>,
            disc:'24/7 Active'
        },
        {
            type: <MdAdsClick size={30}/>,
            disc:'Ads support'
        },
        {
            type:<BiDollar size={30}/>,
            disc:'Refer & Earn'
        }
        
    ]
  return (
    <div className='landing_why'>
          {
              data.map((e, i) => {
                  return <div className={'landing_why_i_'+i} key={i}>
                      <div className={'landing_why_i-icon_'+i}>
                          {e.type}
                      </div>
                      <div className='landing_why_i-disc'>
                          {e.disc}
                      </div>
                      
                  </div>
              })

          }
    </div>
  )
}
