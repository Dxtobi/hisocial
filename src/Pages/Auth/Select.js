
import React from 'react'

export default function Select({setSelect}) {
  return (
    <div className='landing_page'>
          <div className='select-comp'>
              <div className='select-comp-disc'>Select An Account.</div>
              <div className='select-comp-flex'>
                  <div className='select-comp-flex-div'>
                      <div className='select-comp-flex-div-h'>Buyer</div>
                      <div className='select-comp-flex-div-t'>
                        Buy followers, likes, comments and more views on whatssup...
                      </div>
                      <button //onClick={() => navigation('/login')}
                          className='top_com_txt_button'>Start buying
                      </button>
                  </div>
                  <div className='select-comp-flex-div'>
                      <div className='select-comp-flex-div-h'>Seller</div>
                      <div className='select-comp-flex-div-t'>
                          Grt paid for following, liking , commenting and adding people up on whatssup...
                      </div>
                      <button //onClick={() => navigation('/login')}
                          className='top_com_txt_button'>Start selling
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}
