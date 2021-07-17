import React, { useContext, useEffect, useState } from "react";
import BoardItems from "./BoardItems";
import db from "../firebaseConfig";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import BoardItemForm from "./BoardItemForm";
import Accordion from "react-bootstrap/Accordion";
import { ThemeContext } from "../Context/Theme";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Boards() {
  const [boards, setBoards] = useState([]);
  const { theme } = useContext(ThemeContext);
  const initialItemState = {
    boardId: "",
    docId: "",
    dishName: "",
    chefName: "",
    dueTime: "",
    description: "",
    isCompleted: false,
  };
  const [itemState, setItemState] = useState(initialItemState);
  const [isShow, setIsShow] = useState(false);
  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  useEffect(() => {
    db.collection("order_type")
      .orderBy("created")
      .onSnapshot(querySnaphot => {
        const boardList = [];
        querySnaphot.forEach(doc => {
          boardList.push({ ...doc.data(), id: doc.id });
        });
        setBoards(boardList);
      });
  }, []);

  const addForm = boardId => {
    setItemState({ ...initialItemState, boardId });
    handleShow();
  };
  const editForm = (boardId, item) => {
    setItemState({ ...item, boardId });
    handleShow();
  };
  const deleteForm = boardId => {
    db.collection("order_type").doc(boardId).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
  });
  }

  function handelInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setItemState({ ...itemState, [target.name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { docId, boardId, ...rest } = itemState;
    const path = `/order_type/${boardId}/orders`;
    db.collection(path)
      .doc(itemState.id)
      .set(rest)
      .then(() => {
        setItemState(initialItemState);
        handleClose();
      })
      .catch(error => {
        setItemState(initialItemState);
        handleClose();
      });
  }

  let allBoard = boards.map(board => (
    <Card>
      <Card.Header style={{ padding: "0" }}>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={board.id}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <b>{board.name}</b>
            </div>

            <div>
              <Button variant="success" onClick={() => addForm(board.id)}>
                +
              </Button>
              <Button variant="danger" onClick={() => deleteForm(board.id)}>
                Delete Board
              </Button>
            </div>
          </div>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={board.id}>
        <Card.Body>
          <BoardItems boardId={board.id} editForm={editForm} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));
  if (theme.board) {
    allBoard = boards.map(board => (
      <Card className="mr-1 pb-3 ml-4 mt-3 mb-4  board" key={board.id}>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <b>{board.name}</b>
            </div>
            <div>
              <Button variant="success" onClick={() => addForm(board.id)}>
                +
              </Button>
              <Button variant="danger" onClick={() => deleteForm(board.id)}>
                Delete Board
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body style={{ padding: "2px 15px" }}>
          <Card.Text>
            <BoardItems boardId={board.id} editForm={editForm} />
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }

  return (
    <div className="overflow-auto d-flex flex-nowrap">
    {/* List view toggle */}
      {!theme.board ? (
        <Container>
          <Row>
            <Accordion defaultActiveKey="0" className="mr-4  ml-4 mt-3 mb-4 " style={{ width: "100%" }}>
              {allBoard}
            </Accordion>
          </Row>
        </Container>
      ) : (
        allBoard
      )}

      <BoardItemForm
        item={itemState}
        isShow={isShow}
        handleClose={handleClose}
        handelInput={handelInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Boards;
