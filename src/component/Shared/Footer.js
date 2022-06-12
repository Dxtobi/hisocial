import React from 'react'

export default function Footer() {
  const date = new Date()
  let dateYear = date.getFullYear()
  return (
    <div className='footer__'>
      <div className='_box_footer'>
        <div className='footer-big'>Subscribe to our Newsletter</div>
        <div className='footer-small'>Subscribe and get the latest update about UpMart</div>
        <div className='footer-input'>
          <input placeholder='Email'/>
          <button>Enter</button>
        </div>
      </div>
      <div className='footer-last-sec'>
        UpMart copyright reserved - {dateYear}
    </div>
    </div>
  )
}