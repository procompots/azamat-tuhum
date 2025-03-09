import React from 'react'
import './table-header.css'
// import { CiSearch } from "react-icons/ci";
function Tableheader() {
  return (
    <div className='ota'>
     <div className="otalari">
     <h2 className='h21'>All Customers</h2>
     <p className='pca'>Active Members</p>
     </div>
      <div className="inputvsoption">
      <input className='in'  placeholder='search' type="text"/>
      <select className='del' name="" id="#">
        <option value="">short by: <span className='spa'>Newest</span></option>
        <option value="">short by:Newest2</option>
        <option value="">short by:Newest3</option>
      </select>
      </div>
    </div>
  )
}

export default Tableheader
