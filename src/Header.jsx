import React from 'react'
import {MdOutlineSpeed, MdHistory, MdQuestionMark, MdTrain, MdLocationOn, MdSearch, MdFormatAlignJustify, MdOutlineNotificationsActive, MdPerson } from 'react-icons/md'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <MdFormatAlignJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
            <MdOutlineNotificationsActive className='icon'/>
            <MdPerson className='icon'/>
        </div>
    </header>
  )
}

export default Header