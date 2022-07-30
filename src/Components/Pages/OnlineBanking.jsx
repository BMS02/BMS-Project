import React from 'react'
import {Link} from 'react-router-dom'
// import {AddBank} from './OnlineBanking/Addbank';




function OnlineBanking() {
  return (
    <div className='NavTab'>
            {/* <li><Link to="/onlinebanking/addbank">AddBank</Link></li> */}
            <li><Link to="/onlinebanking/debit">Debit</Link></li>

    </div>
  )
}

export default OnlineBanking