import { useState, useEffect } from "react";
import db from "../firebaseConfig";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BoardItems({ boardId, editForm }) {
  const path = `/order_type/${boardId}/orders`;
  const [boardItems, setBoardItems] = useState([]);
  const [sortType, setSortType] = useState("dishNameAZ");

  useEffect(() => {
    db.collection(path).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        // console.log(change)
        if (change.type === "added") {
          setBoardItems(prev => [...prev, { ...change.doc.data(), id: change.doc.id }]);
        } else if (change.type === "removed") {
          setBoardItems(prev => {
            let newBoradItem = prev.filter(item => item.id !== change.doc.id);
            return newBoradItem;
          });
        } else if (change.type === "modified") {
          setBoardItems(prev => {
            let newBoradItem = prev.map(item =>
              item.id !== change.doc.id ? item : { ...change.doc.data(), id: change.doc.id }
            );
            return newBoradItem;
          });
        }
      });
    });
  }, []);

  useEffect(() => {
    const sortArray = type => {
      // console.log(type)
      const types = {
        dishNameAZ: "dishName",
        dishNameZA: "dishName",
        dueTime19: "dueTime",
        dueTime91: "dueTime",
      };
      const sortProperty = types[type];
      // console.log(sortProperty,[...boardItems])
      let sorted;
      switch (type) {
        case "dishNameAZ":
        case "dueTime19":
          sorted = [...boardItems].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
          break;
        case "dishNameZA":
        case "dueTime91":
          sorted = [...boardItems].sort((a, b) => b[sortProperty].localeCompare(a[sortProperty]));
          break;
        default:
          sorted = [...boardItems];
      }
      // console.log(sorted)
      setBoardItems(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  const deleteItem = id => {
    db.collection(path)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      {boardItems.length > 0 && (
        <>
          <select onChange={e => setSortType(e.target.value)} className="form-control mt-2">
            <option value="">Choose Sorting</option>
            <option value="dishNameAZ">A to Z</option>
            <option value="dishNameZA">Z to A</option>
            <option value="dueTime19">Due date closest</option>
            <option value="dueTime91">Due date latest</option>
          </select>
        </>
      )}
      <div className="scroll">
        {boardItems.map(item => (
          <Card className="mr-2 ml-2 mt-3 shadowItem" key={item.id}>
            <Card.Body>
              <Card.Title>{item.dishName}</Card.Title>
              <Card.Text>
                {item.description}
                <br />
                <b>Chef Name: </b>
                {item.chefName}
                <br />
                <b>Is Completed:</b> {item.isCompleted ? "Yes" : "No"}
              </Card.Text>
              <Button variant="info" className="mr-1" onClick={() => editForm(boardId, item)}>
                Edit Item
              </Button>
              <Button variant="danger" onClick={() => deleteItem(item.id)}>
                Delete Item
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Due Date {item.dueTime}</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BoardItems;
