import React from 'react'




export default function Float() {
  
    const data = [
        {
            type: 'Sellers',
            number: '311K',
            icon:''
        },
        {
            type: 'Buyers',
            number: '190k',
            icon:''
        },
        {
            type: 'Ads',
            number: '422k',
            icon:''
        },
    ]
  
  
    return (
    <div className='float_comp'>
            {
                data.map((e, i) => {
                    return <div key={i} className='float_comp-box_item'>
                        <div className='float_comp-box_item_t'>{e.type}</div>
                        <div className='float_comp-box_item_n'>{e.number}</div>
                    </div>
                })
            }
    </div>
  )
}
