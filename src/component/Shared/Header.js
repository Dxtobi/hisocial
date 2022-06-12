import React, {useState} from 'react'
import { AiFillCaretUp,AiFillAppstore } from 'react-icons/ai';



export default function Header({ toggleTheme }) {

  const [show, setNave] = useState(false)

  return (
    <div className='header__'>
          <div className='header_brand'><AiFillCaretUp />MART</div>
          <AiFillAppstore onClick={()=>setNave(!show)} className='menu-togle' size={26}/>
          <div className='toggle'>
              <button onClick={toggleTheme} className='_header-sign-btn'>Toggle theme</button>
              <button className='_header-sign-btn'>Sign in</button>
              <button className='_header-sign-btn'>Sign Up</button>
              <LongMenu />
      </div>
      {
        show && <SideBar toggleTheme={toggleTheme} setNave={setNave}/>
      }
    </div>
  )
}

function LongMenu() {
    return (
        <div className='header__mlist'>
            <button className='_header-sign-btn'>Home</button>
            <button className='_header-sign-btn'>Dashboard</button>
            <button className='_header-sign-btn'>Account</button>
            <button className='_header-sign-btn'>Support</button>
        </div>
      )
}

function SideBar({toggleTheme, setNave}) {
  return (
    <div className='header__side-bar'>
          <button onClick={()=>setNave(false)} className='_header-side-bar'>Close</button>
          <button onClick={toggleTheme} className='_header-side-bar'>Toggle theme</button>
          <button className='_header-side-bar'>Sign in</button>
          <button className='_header-side-bar'>Sign Up</button>
          <button className='_header-side-bar'>Home</button>
          <button className='_header-side-bar'>Dashboard</button>
          <button className='_header-side-bar'>Account</button>
          <button className='_header-side-bar'>Support</button>
      </div>
    )
}