import React from "react";

const User = ({userData}) => {
  return <div>
    <h1>{userData.username}</h1>
    <h4>{userData.email}</h4>
  </div>;
};

export default User;
