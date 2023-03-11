import React from 'react'
import { NavLink } from 'react-router-dom'
import ('./style.css')


const Li = ({link,name,index}) => {
    return (
    
        <li className='liNav' key={index}><NavLink className='aNav' to={link}>{name}</NavLink></li>
    )

}
export default Li