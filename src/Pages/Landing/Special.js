import React from 'react'
import {MdSell} from 'react-icons/md'
export default function Special({navigation}) {
  return (
      <div className='top_component'>
          
          <div className='top_component_text'>
              <div className='top_com_txt_big'>
                  Enjoy Our Special Packages And More Here On UpMart.
              </div>
              <div className='top_com_txt_small'>
                 This packages makes it easy for you to select the kind of account you want.
              </div>
              <div className='package-comp-older'>
                <div className='package-comp'>
                    <div className='package-header'><MdSell /><div className='txt-top'>Seller</div></div>
                    <div className='package-write-up'>
                        A seller package is were you get paid for selling your time
                        this is for customers who
                        would like to sell there products or time on UpMart.
                      </div>
                      <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Sell</button>
                </div>
                <div className='package-comp'>
                    <div className='package-header'><MdSell /><div className='txt-top'>Buyer</div></div>
                    <div className='package-write-up'>
                        A buyer account is for buying available services
                        like buying more likes, followers and comments from UpMart,
                        you can also buy developed social media accounts.
                      </div>
                      <button onClick={()=>navigation('/login')} className='top_com_txt_button'>Buy</button>
                </div>
             </div>
          </div>
      </div>
      
  )
}
