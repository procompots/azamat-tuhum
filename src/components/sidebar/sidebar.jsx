import React from 'react'
import './sidebar.css'
function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="h"><img src="./public/images/imagus.png" alt="" /></div>
                <div className="p"><img src="public/images/key-square.png" alt="" /><h3>Dashboard</h3> <img src="public/images/right.png" alt="" /></div>
                <div className="p"><img src="public/images/3d-square 1.png" alt="" /><h3>Product</h3> <img src="public/images/right.png" alt="" /></div>
                <div className="p"><img src="public/images/user.png" alt="" /><h3>Customers</h3> <img src="public/images/right.png" alt="" /></div>
                <div className="p"><img src="public/images/wallet-money 2.png" alt="" /><h3>Income</h3> <img src="public/images/right.png" alt="" /></div>
                <div className="p"><img src="public/images/discount-shape 1.png" alt="" /><h3>Promote</h3> <img src="public/images/right.png" alt="" /></div>
                <div className="p"><img src="public/images/message-question 1.png" alt="" /><h3>Help</h3> <img src="public/images/right.png" alt="" /></div>
            </div>
        </>
    )
}

export default Sidebar
