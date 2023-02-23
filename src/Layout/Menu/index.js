import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import { useLocation } from 'react-router-dom';

import "./Menu.css"

function Menu() {
  const location = useLocation()
  const baseurl = "http://localhost:3000"

  return (
    <div className='menu-container'>
        <ul className='menu-list'>
          <a href={`${baseurl}/invoices`}>
            <li className='menu-item' style={{ backgroundColor: location.pathname === "/invoices" ? "#90EE90" : "beige" }}>
              <ArticleIcon />
            </li>
          </a>
          <a href={`${baseurl}/sellers`}>
            <li className='menu-item' style={{ backgroundColor: location.pathname === "/sellers" ? "#90EE90" : "beige" }}>
              <StorefrontIcon />
            </li>
          </a>
          <a href={`${baseurl}/customers`}>
            <li className='menu-item' style={{ backgroundColor: location.pathname === "/customers" ? "#90EE90" : "beige" }}>
               <PeopleIcon />
            </li>
          </a>
        </ul>
    </div>
  )
}

export default Menu