import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {

  const [stories, setStories] = useState([]);
  const tot = stories.length ;
  const nav = useNavigate();

  useEffect(() => {

    fetch("http://localhost:3000/stories")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="story d-flex mt-3 mb-3">
      
      {stories.length > 0 ? (

        stories.map((str) => (

          <div key={str.id} onClick={()=>{nav(`/story/${Number(str.id)}/${tot}`)}}>
          <div className="gradient-border me-4">
            <img
              src={str.user.profile_pic}
              alt="DP"
              className="story-dp   rounded-circle"
            />
          </div>
            <p className="text-truncate mt-2  "style={{width:"50px"}}>{str.user.username}</p>
          </div>

        ))

      ) : (

        <p>Loading</p>

      )}

    </div>
  );
}

export default Stories;