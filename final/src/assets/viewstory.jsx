import { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function Viewstory() {

  const { id ,tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {



  fetch(`http://localhost:3000/stories/${id}`)
    .then((data) => data.json())
    .then((data) => setStory(data))
    .catch(err => console.log(err))

}, [id]);
  if (Number(id) > Number(tot) || Number(id) <= 0) {
    navigate('/');
    return;
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        {story ?
          <div>
          <Link to={`/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-square-fill"></i></Link>
            <img
              src={story.image}
              alt="Loading Story"
            />
            <Link to={`/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-square-fill"></i></Link>
           
          </div>
          :
          <div>Loading</div>
        }
      </div>
    </>
  )
}

export default Viewstory