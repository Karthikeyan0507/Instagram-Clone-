
import { useEffect, useState } from "react"

function Post() {
 
  const[posts,setposts]=useState([]);
  useEffect(()=>{

    fetch('http://localhost:3000/posts')
    .then((data)=>data.json())
    .then((data)=>setposts(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
    <div className="d-flex justify-content-center">
      {posts.length > 0 
      ?(
          <div>{posts.map((post)=>(
              <div key ={post.id}>
                 <div className="d-flex align-items-center mt-2">
                  <img className="dp rounded-circle me-2" src={post.user.profile_pic} alt="Profile Pic" />
                  <h5>{post.user.username}</h5>
                  <i className="bi bi-three-dots ms-auto"></i>
                  </div>
                  <img className='post mt-2'src={post.image} alt="" />
                  <div className="d-flex align-items-center fs-4 mt-2 mb-2">
                    <i className="bi bi-suit-heart me-4"></i>
                    <i className="bi bi-chat me-4"></i>
                    <i className="bi bi-repeat me-4"></i>
                    <i className="bi bi-send me-4"></i>
                    <i className="bi bi-bookmark ms-auto"></i>
                  </div>

                  <div>
                    <b>{post.likes} Likes</b>
                  </div>
                  <p className="fs-5">{post.caption}</p>
                  
              </div>))}
          </div>
      )
      :(
          <div>
            Post Loading...
          </div>
      )}
    </div>
    </>
  );
}

export default Post;