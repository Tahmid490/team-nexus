import { useState } from "react";
import "./Team.css";
const Team = () => {
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [photo, setPhoto] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };
  const handleTeamAdd = () => {
    if (name !== "" || skill !== "" || photo !== "") {
      setTeam((prevState) => {
        return [{ name, skill, photo }, ...prevState];
      });
      setName("");
      setPhoto("");
      setSkill("");
    } else {
      alert("All Fields are required");
    }
  };
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Team Member</h1>
      <div className="team-inp">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="skill"
          value={skill}
          onChange={handleSkillChange}
        />
        <input
          type="text"
          placeholder="photo"
          value={photo}
          onChange={handlePhotoChange}
        />
        <button onClick={handleTeamAdd}>add</button>
      </div>

      <div className="team-area">
        {team.length > 0 ? (
          team.map((item) => {
            return (
              <div key={item.id} className="team-item">
                <img src={item.photo} alt="" />
                <h2>{item.name}</h2>
                <p>{item.skill}</p>
              </div>
            );
          })
        ) : (
          <>
            {" "}
            <p>No Data Found</p>
          </>
        )}
      </div>
    </>
  );
};

export default Team;
