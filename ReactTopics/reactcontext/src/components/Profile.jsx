import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Profile() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`profile ${theme}`}>
      <img
        width={200}
        src="https://static.vecteezy.com/system/resources/previews/032/176/197/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
        alt=""
      />

      <h2>John Carter</h2>
      <p>
        My name is John Carter <br />I am a high school student
      </p>
    </div>
  );
}

export default Profile;
