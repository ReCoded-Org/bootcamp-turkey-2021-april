import React, { useEffect, useState } from "react";

const User = ({ id, password, email, username }) => {
  return (
    <div id={id} className="card">
      <p>
        <b>Username:</b> {username}
      </p>
      <p>
        <b>Password:</b> {password}
      </p>
      <p>
        <b>email:</b> {email}
      </p>
    </div>
  );
};

export default User;
