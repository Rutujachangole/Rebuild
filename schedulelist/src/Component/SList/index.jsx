import React from 'react'
import Cal from '../Images/MCal.png'
import './index.css'


const Slist = () => {
  return (
    <div className='main-cont-Slist'>
    <div className='section-main-slist'>

<h3>Schedule List</h3>
<button className='btn btn-primary'> + Add New</button>

    </div>

    <div className='row'>

    <div className='col-md-3 section-slist1'>

<div className='btn btn-primary button-shudule'> <h5 className='button-shudule-title'>+ Create Schedule</h5></div>
<img className='cal' src={Cal} alt="" />

<div className='people-finder-slist1'>
  <h6>People</h6>

  <input className='form-control' type="search"  placeholder='Search for People'/>
</div>


    </div>
    <div className='col-md-9 section-slist'></div>

    </div>
    </div>
  )
}

export default Slist
