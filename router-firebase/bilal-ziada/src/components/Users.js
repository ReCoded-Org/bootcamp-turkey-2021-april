import React, { useEffect, useState } from "react";
import User from "./User";
import db from "../firebaseConfig";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function usersData(){
      const res = await db.collection("usersInfo").get();
      const data = res.docs.map(doc => {
        return {...doc.data()}
      });
      setUsers(data);
    }
    usersData();
  }, []);

  return <div>
    {users.map(userInfo => <User userData={userInfo} key={userInfo.username} />)}
    </div>;
};

export default Users;
