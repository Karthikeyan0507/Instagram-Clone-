import { useEffect, useState } from "react";
import axios  from "axios";

function Suggestion() {

  const [profile, setprofile] = useState(null);
  const [suggestion, setsuggestion] = useState([]);

  useEffect(() => {

    // Fetch current user profile
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setprofile(data))
      .catch((err) => console.log(err));


    // Fetch suggested users
    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setsuggestion(data))
      .catch((err) => console.log(err));

  }, []);

  const handlesubmit = async(id,username)=>{
    axios.post('http://localhost:3000/followes',{id,username})
    .then(alert('followed'))
    .catch(err => console.log(err))
  }


  return (
    <>
      <div>

        <div className="suggestions w-75 m-5">

          {/* Current Profile */}

          {profile ? (

            <div className="d-flex align-items-center mt-2">

              <img
                className="dp rounded-circle me-2"
                src={profile.profile_pic}
                alt="Profile Pic"
              />

              <h5>{profile.username}</h5>

              <h5 className="text-primary ms-auto">
                Switch
              </h5>

            </div>

          ) : (

            <p>Loading Profile</p>

          )}


          {/* Suggested For You */}

          <div className="d-flex mt-2">

            <p>Suggested for you</p>

            <b className="ms-auto">
              See all
            </b>

          </div>


          {/* Suggestions List */}

          <div>

            {suggestion.map((sug) => (

              <div
                key={sug.id}
                className="d-flex align-items-center mt-3"
              >

                <img
                  className="dp rounded-circle me-2"
                  src={sug.profile_pic}
                  alt="Profile Pic"
                />

                <h5>{sug.username}</h5>

                <a
                  className="text-primary ms-auto"
                  onClick={() => handlesubmit(sug.id, sug.username)}
                >
                  Follow
                </a>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Suggestion;