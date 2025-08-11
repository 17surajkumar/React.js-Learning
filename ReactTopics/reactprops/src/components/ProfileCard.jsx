function ProfileCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px",
        height: "200px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h2>Pofile {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Job: {props.job}</p>
    </div>
  );
}

export default ProfileCard;
