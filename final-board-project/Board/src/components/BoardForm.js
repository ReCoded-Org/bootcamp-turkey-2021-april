import React, { useState } from "react";
import db from "../firebaseConfig";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";

function BoardForm() {
  const [redirectTo, setRedirectTo] = useState(false);
  const [boardName, setBoardName] = useState("");
  function handleBoardName(e) {
    setBoardName(e.target.value);
  }

  function handleNewBoardSubmit(e) {
    e.preventDefault();
    db.collection("order_type")
      .add({ name: boardName, created: firebase.firestore.Timestamp.now() })
      .then(() => {
        setRedirectTo(true);
        console.log("Document successfully written!");
        setBoardName("");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <div>
      {redirectTo && <Redirect to="/" />}
      <Form inline onSubmit={e => handleNewBoardSubmit(e)}>
        <FormControl
          type="text"
          placeholder="Add New Borad"
          className="mr-sm-2"
          onChange={handleBoardName}
          value={boardName}
        />
        <Button variant="outline-success" type="submit">
          Add Board
        </Button>
      </Form>
    </div>
  );
}

export default BoardForm;
