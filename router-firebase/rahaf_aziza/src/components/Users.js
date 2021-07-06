import React, { useEffect, useState } from "react";
import User from "./User";
import db from "../firebaseConfig";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const collection = await db.collection("users").get();
      const arrayOfDocs = collection.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      setUsers(arrayOfDocs);
    }
    fetchData();
  }, []);

  //const userDiv = us;
  return (
    <div className="container">
      <div className="row">
        {users.map(item => {
          return (
            <div className="col-md-4 col-sm-6">
              <User
                key={item.id}
                username={item.username}
                password={item.password}
                id={item.password}
                email={item.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
