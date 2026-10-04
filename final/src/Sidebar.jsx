import React from 'react'
import sidebarImage from './assets/.logo-text.png'
import { useNavigate } from 'react-router-dom'


function Sidebar() {

        const navigate = useNavigate();
  return (
    <>
   <div className='m-3 fs-4 position-fixed '>
   <div className='d-flex flex-column gap-3'>
          <img className='logo-text' src={sidebarImage} alt="Loading" />
          <div><i className="bi bi-house me-3 "></i>Home</div>
          <div><i className="bi bi-search  me-3"></i>Search</div>
          <div><i className="bi bi-compass  me-3"></i>Explore</div>
          <div><i className="bi bi-play-btn  me-3"></i>Reels</div>
          <div><i className="bi bi-camera-reels  me-3"></i>Message</div>
          <div><i className="bi bi-suit-heart  me-3"></i>Notification</div>
          <div><i className="bi bi-plus-square  me-3"></i>Create</div>
          <div onClick={()=>{navigate('/profile')}}><i className="bi bi-plus-square  me-3"></i>Profile</div>
   </div>
   <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
          <div><i className="bi bi-threads  me-3"></i>Threads</div>
          <div><i className="bi bi-list  me-3"></i>More</div>
   </div>
   </div>
   </>
  )
}

export default Sidebar