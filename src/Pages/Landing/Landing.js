import React from 'react'
import {useNavigate} from 'react-router-dom'
import Topcomp from './Topcomp'
import './landing.css'
import Float from './Float'
import Why from './Why'
import Twitter from './Twitter'
import Instagram from './Instagram'
import Whatssup from './Whatsap'
import Partners from './Partners'
import {  AiFillFire, AiFillThunderbolt } from 'react-icons/ai'
import Special from './Special'
export default function Landing() {

const navigation = useNavigate()
  const data = [
    {
      partner: 'Hype Tv',
      type:'tv',
    },
    
    {
      partner: 'Offada media',
      type:'tv',
    },
    {
      partner: 'Crimson Camera',
      type:'business',
    },
    {
      partner: 'Trend cloths',
      type:'business',
    },
    {
      partner: 'High fashion',
      type:'business',
    },
    {
      partner: 'Designer x',
      type:'business',
    },
    {
      partner: 'Bold tv',
      type:'tv',
    },
    {
      partner: 'Movie Mania',
      type:'tv',
    },
    {
      partner: 'Slug Designer',
      type:'business',
    },
    {
      partner: 'Hype Shoes',
      type:'business',
    },
    {
      partner: 'Over 85+ More',
      type:'business',
    },
]

  return (
    <div className='landing_page'>
      <Topcomp navigation={navigation}/>
      <Float />
      <div>
       
        <Why />
      </div>
      <div>
        <div className='whyus'>Boost Your Instagram</div>
        <Instagram navigation={navigation}/>
      </div>
      <div>
        <div className='whyus'>Let Them Hear You</div>
        <Twitter navigation={navigation}/>
      </div>
      <div>
        <div className='whyus'>More Audience</div>
        <Whatssup navigation={navigation}/>
      </div>
      <div style={{textAlign:'center'}}>
        <div className='whyus'>Partners</div>
        <Partners />
        <div className='partners-items'>
          {
            data.map((e, i) => {
              return <div key={i} className='p_i_i'>
                {e.type==='tv'?<AiFillThunderbolt />:<AiFillFire/>}
                <div className='p_i_i_t'>{ e.partner}</div>
              </div>
            })
          }
        </div>
        <button className='top_com_txt_button'>Become A Partner</button>
      </div>

    <Special navigation={navigation}/>
    </div>
  )
}
