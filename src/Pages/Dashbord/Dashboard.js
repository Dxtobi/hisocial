import React from 'react'
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import {GiWallet} from 'react-icons/gi'
import Charts from './Chart'

import './dashbord.css'
import Transaction from './Transaction'
export default function Dashboard() {

    
  return (
    <div className='landing_page'>
      
      <div className='dashboard'>
        
        <div className='welcome-name'>
          
          <div>Welcome</div>
          
          <h2>Joseph Tobi 😇</h2>
          
        </div>
        
        <div className='welcome-dashboard'>

          <div className='task-disc'>
           <GiWallet/>
          </div>
            <div className='welcome-dashboard-devider'/>
          <div className='task-amount'>
          ₦2000
          </div>

          
        </div>
        <div className='welcome-available'>
          <span>Available Market</span>
        </div>
        <div className='welcome-available-flex'>
          <button className='welcome-afi twitter'>
            <div className='welcome-afi-icon-comp'><BsTwitter size={30}/></div>
            <div className='welcome-afi-text-comp'>238</div>
            <div className='welcome-afi-type-comp'>Follow | Like</div>
          </button>

          <button className='welcome-afi instagram'>
            <div className='welcome-afi-icon-comp '><BsInstagram size={30}/></div>
            <div className='welcome-afi-text-comp'>238</div>
            <div className='welcome-afi-type-comp'>Follow | Like</div>
          </button>

          <button className='welcome-afi whatsapp'>
            <div className='welcome-afi-icon-comp '><BsWhatsapp size={30}/></div>
            <div className='welcome-afi-text-comp'>238</div>
            <div className='welcome-afi-type-comp'>add-up</div>
          </button>
        </div>

        
        <div className='active-indicator'>Last Transactions</div>

        <div className='chart-container'>
          <Transaction/>
        </div>
        <div className='active-indicator'>Activity Chart</div>

        <div className='chart-container'>
          <Charts/>
        </div>

        

      </div>
      
    </div>
  )
}
