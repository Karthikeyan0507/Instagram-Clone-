import React, { useEffect, useState } from 'react'
import axios from 'axios'


function profile() {

    const[profile,setProfile]= useState(null);
    const[followers,setfollwers]=useState([]);
    const[unfollowed,setunfollowed]= useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data =>setProfile(data.data))
        .catch(err => console.log(err))

        axios.get('http://localhost:3000/followes')
        .then(data =>setfollwers(data.data))
        .catch(err => console.log(err))
    },[unfollowed]);

    function handleonChange(e){
        setProfile(prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdate = async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(()=>console.log("updated"))
        .catch(err => console.log(err))
    }

    const handledelete = async(id) =>{
        axios.delete(`http://localhost:3000/followes/${id}`)
        .then(()=>alert('unfollowed'))
        .then(()=>setunfollowed(!unfollowed))
        .catch(err=>console.log(err))
    }
  return (
    <div>
       { profile ?(
        <div>
            <img className='pr-3' src={profile.profile_pic} alt="" />
            <h5>{profile.username}</h5>

            <input type='text' 
                value={profile.username}
                name='username'
                className='form-control my-4 '
                onChange={handleonChange}
            />
            <input 
                value={profile.profile_pic}
                name='profile_pic'   
                className='form-control ' 
                onChange={handleonChange}      
            />

            <button className='btn btn-primary my-4 'onClick={handleUpdate}>
                update
            </button>
        </div>
       ):(
        <div>
            Loading Profile
        </div>
       ) }

       {followers.length > 0 ? (
        followers.map(follower => (
            <div key={follower.id} className='d-flex my-2'>
             {follower.username}
             <button className='btn btn-secondary ms-auto' onClick={()=>{handledelete(follower.id)}}>
                Un follow
                </button>
           </div>
        ))
       )
       :(
        <div>Loading</div>
       )}
    </div>
  )
}

export default profile