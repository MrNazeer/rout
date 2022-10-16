import React from 'react'
import "./style/style.scss"
import { Link, Outlet} from 'react-router-dom';

export  function Cont3() {
  return (
    <div className='Cont3'>
        <div className='conatiner'>
            <div className='content'>
                <h1>SERVICE</h1>
               <Link to="onlineservice">onlineservice</Link>
               <Link to="offlineservice">offlineservice</Link>
               <Outlet />
            </div>
        </div>
    </div>
  )
}

