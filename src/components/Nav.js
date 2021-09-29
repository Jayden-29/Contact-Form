import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
        <Link to='/referrals'>referrals</Link>

        <br />
    
        <Link to='/enquiries' >enquiries</Link>
        </div>
    )
}
